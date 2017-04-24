/* eslint-disable no-console */

import {MongoClient} from 'mongodb';
import createApp from './express';

const MONGODB_URI = 'mongodb://localhost:27017/ohs';
const PORT = 1337;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  const app = createApp(db);
  app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
  });
});
