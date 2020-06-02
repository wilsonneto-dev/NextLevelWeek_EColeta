import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

export default routes;
