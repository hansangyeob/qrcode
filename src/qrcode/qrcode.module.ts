import { Module } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrcodeController } from './qrcode.controller';
import { Qrcode } from './entities/qrcode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qrcode])],
  controllers: [QrcodeController],
  providers: [QrcodeService]
})

export class QrcodeModule {
  
}
