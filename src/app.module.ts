import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ITShopModule } from './itshop/itshop.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DataBaseModule } from './database/database.module';
import { StorageModule } from './storage/storage.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ITShopModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DataBaseModule,
    StorageModule,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
