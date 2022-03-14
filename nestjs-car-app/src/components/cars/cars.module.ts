import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Car from './entities/car';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
