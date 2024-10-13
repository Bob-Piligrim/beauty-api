import { Service } from 'src/service/entities/service.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subservice {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Service, service => service.subservices)
    service: Service;

    @Column()
    titile: string;

    @Column()
    description: string;

    @Column('json')
    medicalContraindications: string[];

    @Column('json')
    indications: string[];
}
