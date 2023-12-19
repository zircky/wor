import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { PrismaService } from "../PrismaService";

@Module({
  providers: [TestResolver, TestService, PrismaService],
})
export class TestModule {}
