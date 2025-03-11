import { PartialType } from '@nestjs/mapped-types';
import { CreateChefDto } from './create-chef.dto';

export class UpdateChefDto extends PartialType(CreateChefDto) {}
