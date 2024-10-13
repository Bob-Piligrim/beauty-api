import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubserviceService } from './subservice.service';
import { Subservice } from './entities/subservice.entity';

@Controller('subservices')
export class SubserviceController {
    constructor(private readonly subserviceService: SubserviceService) {}

    @Get()
    findAll(): Promise<Subservice[]> {
        return this.subserviceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Subservice> {
        return this.subserviceService.findOne(id);
    }

    @Post()
    create(@Body() subservice: Subservice): Promise<Subservice> {
        return this.subserviceService.create(subservice);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() subservice: Subservice): Promise<Subservice> {
        return this.subserviceService.update(id, subservice);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.subserviceService.remove(id);
    }
}
