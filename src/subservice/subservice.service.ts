import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subservice } from './entities/subservice.entity';

@Injectable()
export class SubserviceService {
    public constructor(
        @InjectRepository(Subservice)
        private readonly subserviceRepository: Repository<Subservice>
    ) {}

    public findAll(): Promise<Subservice[]> {
        return this.subserviceRepository.find({ relations: ['service'] });
    }

    public findOne(id: string): Promise<Subservice> {
        return this.subserviceRepository.findOne({
            where: { id },
            relations: ['service']
        });
    }

    public create(subservice: Subservice): Promise<Subservice> {
        return this.subserviceRepository.save(subservice);
    }

    public async update(id: string, subservice: Subservice): Promise<Subservice> {
        await this.subserviceRepository.update(id, subservice);
        return this.subserviceRepository.findOne({ where: { id } });
    }

    public async remove(id: string): Promise<string> {
        try {
            await this.subserviceRepository.delete(id);
            return 'Ok';
        } catch (error) {
            throw new Error('Не удалось удалить');
        }
    }
}
