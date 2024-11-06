import { validate } from 'class-validator';
import { CreateAppointmentDto } from '../booking/dto/create-appointment.dto';

describe('CreateAppointmentDto', () => {
    it('should validate successfully for a correct data', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = 'John Doe';
        dto.customerNumber = '12345678901';
        dto.customerMail = 'Ivan@mail.ru';
        dto.appointmentDate = '2022-12-31T10:00:00.000Z';
        dto.procedureName = 'Botulter';
        const errors = await validate(dto);
        expect(errors.length).toBe(0);
    });
    it('should throw a validation error for a customerName', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = '';
        dto.customerNumber = '12345678901';
        dto.customerMail = 'Ivan@mail.ru';
        dto.appointmentDate = '2022-12-31T10:00:00.000Z';
        dto.procedureName = 'Botulter';
        const errors = await validate(dto);
        expect(errors.length).toBe(1);
        expect(errors[0].property).toBe('customerName');
    });
    it('should throw a validation error for a customerNumber', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = 'John Doe';
        dto.customerNumber = '';
        dto.customerMail = 'Ivan@mail.ru';
        dto.appointmentDate = '2022-12-31T10:00:00.000Z';
        dto.procedureName = 'Botulter';
        const errors = await validate(dto);
        expect(errors.length).toBe(1);
        expect(errors[0].property).toBe('customerNumber');
    });
    it('should throw a validation error for a customerMail', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = 'John Doe';
        dto.customerNumber = '12345678901';
        dto.customerMail = '';
        dto.appointmentDate = '2022-12-31T10:00:00.000Z';
        dto.procedureName = 'Botulter';
        const errors = await validate(dto);
        expect(errors.length).toBe(1);
        expect(errors[0].property).toBe('customerMail');
    });
    it('should throw a validation error for a appointmentDate', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = 'John Doe';
        dto.customerNumber = '12345678901';
        dto.customerMail = 'Ivan@mail.ru';
        dto.appointmentDate = '';
        dto.procedureName = 'Botulter';
        const errors = await validate(dto);
        expect(errors.length).toBe(1);
        expect(errors[0].property).toBe('appointmentDate');
    });
    it('should throw a validation error for a procedureName', async () => {
        const dto = new CreateAppointmentDto();
        dto.customerName = 'John Doe';
        dto.customerNumber = '12345678901';
        dto.customerMail = 'Ivan@mail.ru';
        dto.appointmentDate = '2022-12-31T10:00:00.000Z';
        dto.procedureName = '';
        const errors = await validate(dto);
        expect(errors.length).toBe(1);
        expect(errors[0].property).toBe('procedureName');
    });
});
