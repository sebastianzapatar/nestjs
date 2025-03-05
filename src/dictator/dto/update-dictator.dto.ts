import { PartialType } from '@nestjs/mapped-types';
import { CreateDictatorDto } from './create-dictator.dto';

export class UpdateDictatorDto extends PartialType(CreateDictatorDto) {}
