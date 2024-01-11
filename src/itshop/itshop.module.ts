import { Module } from '@nestjs/common'
import { ITShopService } from './itshop.service'
import { ITShopController } from './itshop.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ITShop } from './entities/itshop.entity'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    TypeOrmModule.forFeature([ITShop]),
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
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
      },
    ]),
  ],
  controllers: [ITShopController],
  providers: [ITShopService],
})
export class ITShopModule {}
