import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './entities/service.entity';

@Controller('services')
export class ServiceController {
    constructor(private readonly serviceService: ServiceService) {}

    @Get()
    findAll(): Promise<Service[]> {
        return this.serviceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Service> {
        return this.serviceService.findOne(id);
    }

    @Post()
    create(@Body() serviceData: Service): Promise<Service> {
        return this.serviceService.create(serviceData);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() serviceData: Service): Promise<Service> {
        return this.serviceService.update(id, serviceData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.serviceService.remove(id);
    }
}
