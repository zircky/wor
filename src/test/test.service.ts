import { Injectable } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { PrismaService } from "../PrismaService";
import { Test } from "@prisma/client";

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {
  }


  async findAll(): Promise<Test[]> {
    return this.prisma.test.findMany({});
  }
}
