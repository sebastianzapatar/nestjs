import { Module } from '@nestjs/common';
import { ChefService } from './chef.service';
import { ChefController } from './chef.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chef } from './entities/chef.entity';
import { DictatorModule } from 'src/dictator/dictator.module';

@Module({
  imports:[TypeOrmModule.forFeature([Chef]),DictatorModule],
  controllers: [ChefController],
  providers: [ChefService],
  exports:[ChefService,TypeOrmModule]
})
export class ChefModule {}
