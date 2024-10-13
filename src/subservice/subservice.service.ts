import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subservice } from './entities/subservice.entity';

@Injectable()
export class SubserviceService {
    constructor(
        @InjectRepository(Subservice)
        private readonly subserviceRepository: Repository<Subservice>
    ) {}

    findAll(): Promise<Subservice[]> {
        return this.subserviceRepository.find({ relations: ['service'] });
    }

    findOne(id: string): Promise<Subservice> {
        return this.subserviceRepository.findOne({
            where: { id },
            relations: ['service']
        });
    }

    create(subservice: Subservice): Promise<Subservice> {
        return this.subserviceRepository.save(subservice);
    }

    async update(id: string, subservice: Subservice): Promise<Subservice> {
        await this.subserviceRepository.update(id, subservice);
        return this.subserviceRepository.findOne({ where: { id } });
    }

    async remove(id: string): Promise<void> {
        await this.subserviceRepository.delete(id);
    }
}
