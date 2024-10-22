import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceEntity } from './entities/service.entity';

@Controller('services')
export class ServiceController {
    public constructor(private readonly serviceService: ServiceService) {}

    @Get()
    public findAll(): Promise<ServiceEntity[]> {
        return this.serviceService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: string): Promise<ServiceEntity> {
        return this.serviceService.findOne(id);
    }

    @Post()
    public create(@Body() serviceData: ServiceEntity): Promise<ServiceEntity> {
        return this.serviceService.create(serviceData);
    }

    @Put(':id')
    public update(
        @Param('id') id: string,
        @Body() serviceData: ServiceEntity
    ): Promise<ServiceEntity> {
        return this.serviceService.update(id, serviceData);
    }

    @Delete(':id')
    public remove(@Param('id') id: string): Promise<string> {
        return this.serviceService.remove(id);
    }
}
