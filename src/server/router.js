import {Router} from 'express';
import {mapAnswersToQuestions} from './typeform';
import fetch from 'node-fetch';
import {createSlackText} from './slack';

const ObjectId = require('mongodb').ObjectID;


module.exports = function routes(db) {
  const router = new Router();
  const myCollection = db.collection('pulse');

  router.get('/', (req,res) => {
    myCollection.find().toArray((err,docs) => {
      if(err) return res.sendStatus(500);
      res.json(docs);
    });
  });

  router.post('/', (req, res) => {
    const questions = req.body.form_response.definition.fields;
    const answers = req.body.form_response.answers;
    const formResponse = mapAnswersToQuestions(questions, answers);

    myCollection.insert(formResponse, (err, inserted) => {
      if (err) { return console.log(err); }
      console.log('inserted', inserted);
    });

    res.status(200).json(req.body);

    fetch('https://hooks.slack.com/services/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', { 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: createSlackText(formResponse)
     })
     .then(response => {
       if (!response.ok) { throw Error(response.statusText); }
       console.log('ok')
     })
     .catch(err => console.log(err));  
  });

  router.put('/:id/:status', (req,res) => {
    const id = req.params.id;
    const status = req.params.status
    myCollection.update(
      {_id: ObjectId(id)}, 
      {$set:{status: status}}, 
      (err, result) => {
        if (err) { return console.log(err); }
        console.log('update successful');
        console.log('~~~~~~~status~~~~~~', result);
        res.status(200).json(result);
    });
  });

  return router;
};