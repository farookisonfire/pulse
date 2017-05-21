import express from 'express';
import bodyParser from 'body-parser';
import routes from './router';

module.exports = function createApp(db) {

  const app = express();

  app.use(express.static(__dirname + '/../../build'));
  app.use(bodyParser.json());
  app.use('/api/applicants', routes(db));

  app.use((err, req, res, next) => {
    res.status(500).send("500 Internal server error");
  });

  return app;
};
