import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors()
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://rkrywvsx:QAaX8HoG_aeKZn9SVNgiVdY9hEbV6BTQ@jackal.rmq.cloudamqp.com/rkrywvsx',
      ],
      queue: 'notification_queue',
      queueOptions: {
        durable: false,
      },
    },
  })
  await app.startAllMicroservices()
  await app.listen(3000)
}
bootstrap()
