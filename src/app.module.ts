import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrcodeModule } from './qrcode/qrcode.module';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { CompanyModule } from './company/company.module';
// import { OfficeModule } from './office/office.module';
// import { InvoiceModule } from './invoice/invoice.module';
// import { BookingsModule } from './bookings/bookings.module';
// import { RoomModule } from './room/room.module';
// import { AccessControlModule } from './access-control/access-control.module';


@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'deskimo.cmm3wmiksnlk.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'qrscode',
    synchronize: true,
    autoLoadEntities: true,
  }),
  QrcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}