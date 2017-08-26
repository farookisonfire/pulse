/* eslint-disable no-console */
import {Router} from 'express';
import {MongoClient} from 'mongodb';
import {mapAnswersToQuestions} from './typeform';
import {updateSlack} from './slack';
import {sendMail, createMail} from './mailer';

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

  router.put('/:id/:status/:program', (req,res) => {
    const applicant = req.params || {};
    const id = applicant.id;
    const status = applicant.status;
    
    // TODO: improve this undefined check
    const program = applicant.program === "undefined" || applicant.program === undefined ? 
      undefined :
      applicant.program;
    
    const updatePayload = program ? 
      {status: status, secondary: program} :
      {status:status};

    MongoClient.connect(MONGODB_URI, (err, db) => {
      const myCollection = db.collection('applied');
      myCollection.update(
        {_id: ObjectId(id)}, 
        {$set: updatePayload}, 
        (err, result) => {
          if (err) { return console.log(err); }
          console.log('update successful', result);
          res.status(200).json(result);
          db.close();
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
  