import express from 'express';
import bodyParser from 'body-parser';
import routes from './router';

module.exports = function createApp(db) {

  const app = express();

  app.use(express.static(__dirname + '/../../build'));
  app.use(bodyParser.json());
  app.use('/api', routes(db));

  return app;
};
