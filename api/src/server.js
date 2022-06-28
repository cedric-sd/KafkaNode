import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes';

const app = express();

/**
 * @description - Faz conexão com o kafka
 */
const kafka = new Kafka({
  clientId: 'api-server',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
/**
 * @description - Disponibiliza o producer para as rotas.
 */
app.use((req, res, next) => {
  req.producer = producer;

  return next();
})

/**
 * @description - cadastra as rotas da aplicação.
 */
app.use(routes);

async function main() {
  // const producer = kafka.producer();
  // await producer.connect();
  // await producer.send({
  //   topic: 'mailing',
  //   messages: [
  //     { value: 'Hello Kafka!' },
  //   ],
  // });
  // await producer.disconnect();
  app.listen(3333);
}

main().catch(console.error);
