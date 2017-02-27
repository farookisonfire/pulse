import {Router} from 'express';

const router = new Router();

router.get('/', (req,res) => {
  res.send("wa gwan, bredren");
});

module.exports = router;
