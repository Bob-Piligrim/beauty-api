import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookingAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column({ length: 11 })
    customerNumber: string;

    @Column()
    customerMail: string;

    @Column()
    appointmentDate: string;

    @Column()
    procedureName: string;
}
