import { Subservice } from 'src/subservice/entities/subservice.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ServiceType {
    INJECTABLE_COSMETOLOGY = 'injectable cosmetology',
    APPARATUS_COSMETOLOGY = 'apparatus cosmetology',
    ESTHETIC_COSMETOLOGY = 'esthetic cosmetology',
    MALE_COSMETOLOGY = 'male cosmetology'
}

@Entity()
export class ServiceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'enum',
        enum: ServiceType
    })
    type: ServiceType;

    @OneToMany(() => Subservice, subservice => subservice.service, { cascade: true })
    subservices: Subservice[];
}
