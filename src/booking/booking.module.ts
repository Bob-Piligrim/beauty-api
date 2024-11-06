import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingAppointment } from './entities/bookingappointment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BookingAppointment])],
    controllers: [BookingController],
    providers: [BookingService]
})
export class BookingModule {}
