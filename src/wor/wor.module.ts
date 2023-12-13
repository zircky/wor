import { Module } from '@nestjs/common';
import { WorService } from './wor.service';
import { WorResolver } from './wor.resolver';
import { PrismaService } from "../PrismaService";

@Module({
  providers: [WorResolver, WorService, PrismaService],
})
export class WorModule {}
