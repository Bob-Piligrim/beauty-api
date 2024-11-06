import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from '../booking/booking.controller';
import { BookingService } from '../booking/booking.service';
import { CreateAppointmentDto } from '../booking/dto/create-appointment.dto';

describe('BookingController', () => {
    let bookingController: BookingController;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let bookingService: BookingService;

    const mockBookingService = {
        create: jest.fn(dto => ({
            id: 1,
            ...dto
        })),
        findAll: jest.fn(() => [])
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BookingController],
            providers: [{ provide: BookingService, useValue: mockBookingService }]
        }).compile();

        bookingController = module.get<BookingController>(BookingController);
        bookingService = module.get<BookingService>(BookingService);
    });

    it('should call bookingService.create', async () => {
        const createAppointmentDto: CreateAppointmentDto = {
            customerName: 'Ivan',
            customerNumber: '89998887766',
            customerMail: 'Ivan@mail.ru',
            appointmentDate: '2022-12-31T10:00:00.000Z',
            procedureName: 'botulter'
        };

        const result = await bookingController.create(createAppointmentDto);
        expect(result).toEqual({ id: 1, ...createAppointmentDto });
        expect(mockBookingService.create).toHaveBeenCalledWith(createAppointmentDto);
    });
});
