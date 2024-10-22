import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubserviceService } from './subservice.service';
import { Subservice } from './entities/subservice.entity';

@Controller('subservices')
export class SubserviceController {
    public constructor(private readonly subserviceService: SubserviceService) {}

    @Get()
    public findAll(): Promise<Subservice[]> {
        return this.subserviceService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: string): Promise<Subservice> {
        return this.subserviceService.findOne(id);
    }

    @Post()
    public create(@Body() subservice: Subservice): Promise<Subservice> {
        return this.subserviceService.create(subservice);
    }

    @Put(':id')
    public update(
        @Param('id') id: string,
        @Body() subservice: Subservice
    ): Promise<Subservice> {
        return this.subserviceService.update(id, subservice);
    }

    @Delete(':id')
    public remove(@Param('id') id: string): Promise<string> {
        return this.subserviceService.remove(id);
    }
}
