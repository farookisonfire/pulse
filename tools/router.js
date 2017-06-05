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
      const myCollection = db.collection('pulse');
      myCollection.find().toArray((err,docs) => {
        if(err) return res.sendStatus(500);
        res.json(docs);
      });
      db.close();
    });
  });

  router.post('/', (req, res) => {
    const questions = req.body.form_response.definition.fields;
    const answers = req.body.form_response.answers;
    const formResponse = mapAnswersToQuestions(questions, answers);

    storeApplicant(formResponse)
      .then(() => updateSlack(formResponse))
      .then(() => sendMail(createMail(formResponse)))
      .then(() => res.status(200).json(req.body))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

  router.put('/:id/:status', (req,res) => {
    const id = req.params.id;
    const status = req.params.status;
    MongoClient.connect(MONGODB_URI, (err, db) => {
      const myCollection = db.collection('pulse');
      myCollection.update(
        {_id: ObjectId(id)}, 
        {$set:{status: status}}, 
        (err, result) => {
          if (err) { return console.log(err); }
          console.log('update successful', result);
          res.status(200).json(result);
      });
      db.close();
    });
  });

  return router;
};

function storeApplicant(formResponse) {
    console.log('in the new function')
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, (err, db) => {
        if (!err) {
          const myCollection = db.collection('pulse');
          myCollection.insert(formResponse, (error, inserted) => {
            db.close();
            if (!err) { 
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