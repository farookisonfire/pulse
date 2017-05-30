import {Router} from 'express';
import fetch from 'node-fetch';
import {MongoClient} from 'mongodb';
import {mapAnswersToQuestions} from './typeform';
import {createSlackText} from './slack';

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

    MongoClient.connect(MONGODB_URI, (err, db) => {
      const myCollection = db.collection('pulse');
      myCollection.insert(formResponse, (err, inserted) => {
        if (err) { return console.log(err); }
        console.log('inserted', inserted);
      });
      db.close();
    });

    fetch('https://hooks.slack.com/services/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', { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: createSlackText(formResponse)
     })
     .then(response => {
       if (!response.ok) { throw Error(response.statusText); }
       console.log('ok');
     })
     .catch(err => console.log(err));  

     res.status(200).json(req.body);
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