import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingAppointment } from './entities/bookingappointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(BookingAppointment)
        private readonly bookingAppointmentRepository: Repository<BookingAppointment>
    ) {}

    public async create(
        createAppointmentDto: CreateAppointmentDto
    ): Promise<BookingAppointment> {
        const newAppointment =
            this.bookingAppointmentRepository.create(createAppointmentDto);
        return this.bookingAppointmentRepository.save(newAppointment);
    }

    public async findAll(): Promise<BookingAppointment[]> {
        return await this.bookingAppointmentRepository.find();
    }
}
