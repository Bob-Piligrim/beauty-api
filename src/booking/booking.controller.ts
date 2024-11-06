import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('consultations')
export class BookingController {
    public constructor(private readonly bookingService: BookingService) {}

    @Post('book')
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true
        })
    )
    public async create(@Body() createAppointmentDto: CreateAppointmentDto) {
        return await this.bookingService.create(createAppointmentDto);
    }
}
