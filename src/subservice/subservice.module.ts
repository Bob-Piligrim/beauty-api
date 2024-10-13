import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subservice } from './entities/subservice.entity';
import { SubserviceController } from './subservice.controller';
import { SubserviceService } from './subservice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Subservice])],
    controllers: [SubserviceController],
    providers: [SubserviceService]
})
export class SubserviceModule {}
