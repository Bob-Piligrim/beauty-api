import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './entities/service.entity';

@Injectable()
export class ServiceService {
    public constructor(
        @InjectRepository(ServiceEntity)
        private readonly serviceRepository: Repository<ServiceEntity>
    ) {}

    public findAll(): Promise<ServiceEntity[]> {
        return this.serviceRepository.find({ relations: ['subservices'] });
    }

    public findOne(id: string): Promise<ServiceEntity> {
        return this.serviceRepository.findOne({
            where: { id },
            relations: ['subservices']
        });
    }

    public create(service: ServiceEntity): Promise<ServiceEntity> {
        return this.serviceRepository.save(service);
    }

    public async update(id: string, service: ServiceEntity): Promise<ServiceEntity> {
        await this.serviceRepository.update(id, service);
        return this.serviceRepository.findOne({ where: { id } });
    }

    public async remove(id: string): Promise<string> {
        try {
            await this.serviceRepository.delete(id);
            return 'OK';
        } catch (error) {
            throw new Error('Не удалось удалить');
        }
    }
}
