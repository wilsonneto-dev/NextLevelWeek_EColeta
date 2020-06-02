import express, { Request, Response } from 'express';

const app = express();

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Teste de mensagem' });
});

app.listen(3333);
