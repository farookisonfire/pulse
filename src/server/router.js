import {Router} from 'express';

module.exports = function routes(db) {
  const router = new Router();
  const myCollection = db.collection('pulse');

  router.get('/', (req,res) => {
    myCollection.find().toArray((err,docs) => {
      if(err) return res.sendStatus(500);
      res.json(docs);
    });
  });

  return router;
};
