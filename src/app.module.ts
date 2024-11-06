import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { SubserviceModule } from './subservice/subservice.module';
import { BookingModule } from './booking/booking.module';

@Module({
    imports: [ServiceModule, SubserviceModule, BookingModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
