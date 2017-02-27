import express from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.use(express.static(__dirname + '/../../../build'));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(3000, () => {
  console.log('listening on 3000')
});
