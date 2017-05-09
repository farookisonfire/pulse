import {Router} from 'express';
import {mapAnswersToQuestions} from './typeform';

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
    myCollection.insert(mapAnswersToQuestions(questions, answers));
    res.status(200).json(req.body);
  });

  return router;
};