import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>
    ) {}

    findAll(): Promise<Service[]> {
        return this.serviceRepository.find({ relations: ['subservices'] });
    }

    findOne(id: string): Promise<Service> {
        return this.serviceRepository.findOne({
            where: { id },
            relations: ['subservices']
        });
    }

    create(service: Service): Promise<Service> {
        return this.serviceRepository.save(service);
    }

    async update(id: string, service: Service): Promise<Service> {
        await this.serviceRepository.update(id, service);
        return this.serviceRepository.findOne({ where: { id } });
    }

    async remove(id: string): Promise<void> {
        await this.serviceRepository.delete(id);
    }
}
