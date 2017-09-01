/* eslint-disable no-console */
import {Router} from 'express';
import {MongoClient} from 'mongodb';
import {mapAnswersToQuestions} from './typeform';
import {updateSlack} from './slack';
import {sendMail, createMail} from './mailer';

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(process.env.MAILCHIMP_KEY); 

const lists = {
  test: 'b5972e3719',
  denied: '0',
  secondaryHealth: 1,
  secondaryEducation: 2,
  secondaryImpact: 3
};

const MONGODB_URI = 'mongodb://localhost:27017/ohs';
const COLLECTION = 'appliedv2'
const ObjectId = require('mongodb').ObjectID;

module.exports = function routes() {
  const router = new Router();
  
  router.get('/', (req,res) => {
    MongoClient.connect(MONGODB_URI, (err, db) => {
      if(err) return res.status(500).send('unable to connect to db.');
      const myCollection = db.collection(COLLECTION);
      myCollection.find().toArray((error, docs) => {
        if(error) return res.status(500).send(error);
        res.json(docs);
        db.close();
      });
    });
  });

  router.post('/secondary', (req, res) => {
    const questions = req.body.form_response.definition.fields;
    const answers = req.body.form_response.answers;
    const id = req.body.form_response.hidden.dbid;
    const status = 'secondary';

    if (id !== "hidden_value") {
      const formResponse = mapAnswersToQuestions(questions, answers, status);

      console.log('`````````````````````````````````````````````````')
      console.log('Mapped Answer and Questions ------>', formResponse)
      console.log('`````````````````````````````````````````````````')

      updateApplicant(res, id, formResponse)
        .then((result) => {
          res.status(200).send('Applicant update with secondary success.')
        })
        .catch(err => res.status(500).send('Error, unable to update applicant with secondary.'));
        
    } else {
      res.status(500).send('Invalid UserId');
    }
  });

  router.post('/', (req, res) => {
    const questions = req.body.form_response.definition.fields;
    const answers = req.body.form_response.answers;
    const status = 'applied';
    const formResponse = mapAnswersToQuestions(questions, answers, status);

    storeApplicant(formResponse)
      .then(() => updateSlack(formResponse))
      // .then(() => sendMail(createMail(formResponse)))
      .then(() => res.status(200).json(req.body))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  router.put('/:id', (req,res) => {
    const {
      id = '',
      email = '',
      firstName = '',
      lastName = '',
      status = '',
      program = '',
    } = req.body;

    const dbPayload = program ? 
      {status: status, secondary: program} :
      {status: status};

    const mailClientPayload = resolveMailClientPayload(email, firstName, lastName, id);
    const listId = resolveListId(status, program);

    updateApplicant(res, id, dbPayload)
      .then(result => addToMailList(res, mailClientPayload, listId))
      .catch((err) => console.log('caught after UpdateApp and addToMail', err));    
  });

  return router;
};

function storeApplicant(formResponse) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, (err, db) => {
        if (!err) {
          const myCollection = db.collection(COLLECTION);
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

  function updateApplicant(res, id, dbPayload ) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(MONGODB_URI, (err, db) => {
      if (err) {
        return res.status(500).send('unable to connect to DB');
      }
      const myCollection = db.collection(COLLECTION);
      myCollection.update(
        {_id: ObjectId(id)},
        {$set: dbPayload},
        (err, result) => {
          if (err) {
            db.close();
            reject();
          }
          db.close();
          resolve(result);
      });
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
      console.log('MAILCHIMP RESULT:', result);
      res.status(200).send('User added to list successfully.');
    });
  }

  function resolveListId(status, program) {
    if (status === 'denied') {
      return lists.denied;
    }

    if (status === 'secondary' && program) {
      switch(program) {
        case 'Health':
          // return lists.secondaryHealth;
          return lists.test;
        case 'Education':
          // return lists.secondaryEducation;
          return lists.test;
        case 'Impact':
          // return lists.secondaryImpact;
          return lists.test;
        default:
          return;
      }
    }
    return;
  }

  function resolveMailClientPayload(email, firstName, lastName, id) {
    const payload = {
      "email_address": email,
      "status": "subscribed",
      "merge_fields": {
        "FNAME": firstName,
        "LNAME": lastName,
        "DBID": id,
      }
    };

    return payload;
  }
