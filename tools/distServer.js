import express from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './router';

require('dotenv').config();

/* eslint-disable no-console */

const port = 3030;
const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api/applicants', routes());

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on port: ${port}`);
  }
});