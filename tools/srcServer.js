import express from 'express';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import config from '../webpack.config.dev';
import routes from './router';

/* eslint-disable no-console */

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

app.use('/api/applicants', routes());

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on port: ${port}`);
  }
});
