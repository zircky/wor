import { Injectable } from '@nestjs/common';
import { CreateWorInput } from './dto/create-wor.input';
import { Query } from "@nestjs/graphql";
import { PrismaService } from "../PrismaService";


@Injectable()
export class WorService {
  constructor(private readonly prisma: PrismaService) {
  }

  async findAll() {
    return this.prisma.worcking.findMany();
  }
}
