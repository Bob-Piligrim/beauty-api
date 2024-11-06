import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAppointmentDto {
    @IsString()
    @IsNotEmpty()
    public customerName: string;

    @IsString()
    @IsNotEmpty()
    @Length(11, 11)
    public customerNumber: string;

    @IsString()
    @IsNotEmpty()
    public customerMail: string;

    @IsString()
    @IsNotEmpty()
    public appointmentDate: string;

    @IsString()
    @IsNotEmpty()
    public procedureName: string;
}
