import express from 'express';

const router = express.Router();

router.get('/mail', (req, res) => {
  res.send('hello world');
});

export default router;
