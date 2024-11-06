import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from '../booking/booking.service';
import { CreateAppointmentDto } from '../booking/dto/create-appointment.dto';
import { BookingAppointment } from '../booking/entities/bookingappointment.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BookingService', () => {
    let bookingService: BookingService;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let bookingRepository: Repository<BookingAppointment>;

    const mockBookingRepository = {
        create: jest.fn(dto => ({ id: 1, ...dto })),
        save: jest.fn(appointment => Promise.resolve(appointment)),
        find: jest.fn(() =>
            Promise.resolve([
                mockBookingRepository.create({
                    customerName: 'Ivan',
                    customerNumber: '89998887766',
                    customerMail: 'Ivan@mail.ru',
                    appointmentDate: '2022-12-31T10:00:00.000Z',
                    procedureName: 'botulter'
                })
            ])
        )
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BookingService,
                {
                    provide: getRepositoryToken(BookingAppointment),
                    useValue: mockBookingRepository
                }
            ]
        }).compile();
        bookingService = module.get<BookingService>(BookingService);
        bookingRepository = module.get<Repository<BookingAppointment>>(
            getRepositoryToken(BookingAppointment)
        );
    });
    it('should be defined', () => {
        expect(bookingService).toBeDefined();
    });
    describe('create', () => {
        it('should create a new appointment and return it', async () => {
            const createAppointmentDto: CreateAppointmentDto = {
                customerName: 'Ivan',
                customerNumber: '89998887766',
                customerMail: 'Ivan@mail.ru',
                appointmentDate: '2022-12-31T10:00:00.000Z',
                procedureName: 'botulter'
            };
            const newAppointment = await bookingService.create(createAppointmentDto);
            expect(newAppointment).toHaveProperty('id');
            expect(newAppointment.customerName).toBe(createAppointmentDto.customerName);
            expect(newAppointment.customerNumber).toBe(
                createAppointmentDto.customerNumber
            );
            expect(newAppointment.customerMail).toBe(createAppointmentDto.customerMail);
            expect(newAppointment.appointmentDate).toBe(
                createAppointmentDto.appointmentDate
            );
            expect(newAppointment.procedureName).toBe(createAppointmentDto.procedureName);
        });
    });
    describe('findAll', () => {
        it('should return an array of appointments', async () => {
            const createAppointmentDto: CreateAppointmentDto = {
                customerName: 'Ivan',
                customerNumber: '89998887766',
                customerMail: 'Ivan@mail.ru',
                appointmentDate: '2022-12-31T10:00:00.000Z',
                procedureName: 'botulter'
            };
            await bookingService.create(createAppointmentDto);
            const appointments = await bookingService.findAll();
            expect(appointments).toHaveLength(1);
            expect(appointments[0].customerName).toBe('Ivan');
        });
    });
});
