import { PartialType } from '@nestjs/mapped-types';
import { CreatePobresincautoDto } from './create-pobresincauto.dto';

export class UpdatePobresincautoDto extends PartialType(CreatePobresincautoDto) {}
