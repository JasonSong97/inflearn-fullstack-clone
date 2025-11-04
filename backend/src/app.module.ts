import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })], // ConfigModule 전역적 관리
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
