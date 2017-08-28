/* eslint-disable no-console */
import {Router} from 'express';
import {MongoClient} from 'mongodb';
import {mapAnswersToQuestions} from './typeform';
import {updateSlack} from './slack';
import {sendMail, createMail} from './mailer';

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('a06d10ae8a5fc56027fedde2d2d5f19a-us14'); 
const listId = 'b5972e3719';

const MONGODB_URI = 'mongodb://localhost:27017/ohs';
const ObjectId = require('mongodb').ObjectID;

module.exports = function routes() {
  const router = new Router();
  
  router.get('/', (req,res) => {
    MongoClient.connect(MONGODB_URI, (err, db) => {
      if(err) return res.status(500).send('unable to connect to db.');
      const myCollection = db.collection('applied');
      myCollection.find().toArray((error, docs) => {
        if(error) return res.status(500).send(error);
        res.json(docs);
        db.close();
      });
    });
  });

  router.post('/', (req, res) => {
    const questions = req.body.form_response.definition.fields;
    const answers = req.body.form_response.answers;
    const formResponse = mapAnswersToQuestions(questions, answers);

    storeApplicant(formResponse)
      .then(() => updateSlack(formResponse))
      // .then(() => sendMail(createMail(formResponse)))
      .then(() => res.status(200).json(req.body))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  router.put('/:id/:firstName/:lastName/:email/:status/:program', (req,res) => {
    const applicant = req.params || {};
    const id = applicant.id;
    const status = applicant.status;
    const firstName = applicant.firstName;
    const lastName = applicant.lastName;
    const email = applicant.email;
    
    // TODO: improve this undefined check
    const program = applicant.program === "undefined" || applicant.program === undefined ? 
      undefined :
      applicant.program;
    
    const dbPayload = program ? 
      {status: status, secondary: program} :
      {status:status};

    console.log('-----------------------')
    console.log('mailchimp about to be called')
    console.log('-----------------------')

    const mailClientPayload = {
          "email_address": email, 
          "status":"subscribed",
          "merge_fields": {
            "FNAME": firstName,
            "LNAME": lastName,
          }
        };

    MongoClient.connect(MONGODB_URI, (err, db) => {
      const myCollection = db.collection('applied');
      myCollection.update(
        {_id: ObjectId(id)}, 
        {$set: dbPayload},
        (err, result) => {
          if (err) { 
            return res.status(500).send('Unable to update user');
          }
          db.close();
          addToMailList(res, mailClientPayload, listId);
      });
    });
  });

  return router;
};

function storeApplicant(formResponse) {
    console.log('in the new function');
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, (err, db) => {
        if (!err) {
          const myCollection = db.collection('applied');
          myCollection.insert(formResponse, (error, inserted) => {
            db.close();
            if (!error) { 
              console.log('inserted', inserted);
              resolve(inserted);
            } else {
              console.log(error);
              reject();
            }
          });
        } else {
          console.log(err);
          reject();
        }
      });
    });
  }

  function addToMailList(res, mailPayload, listId) {
      mailchimp.post({
        path: `lists/${listId}/members`,
        body: mailPayload,
      }, function(err, result){
        if (err) {
          console.log(err);
          return res.status(500).send('unable to add new list member.');
        } 
        console.log(result);
        res.status(200).send('User added to list successfully.');
      });
    }
  