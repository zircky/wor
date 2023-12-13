import { Module } from '@nestjs/common';
import { WorService } from './wor.service';
import { WorResolver } from './wor.resolver';

@Module({
  providers: [WorResolver, WorService],
})
export class WorModule {}
