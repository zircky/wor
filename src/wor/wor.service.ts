import { Injectable } from '@nestjs/common';
import { CreateWorInput } from './dto/create-wor.input';
import { Args, Query } from "@nestjs/graphql";
import { PrismaService } from "../PrismaService";


@Injectable()
export class WorService {
  constructor(private readonly prisma: PrismaService) {
  }

  async findAll() {
    return this.prisma.worcking.findMany();
  }

  async create(@Args("data") data: CreateWorInput) {
    return this.prisma.worcking.create({
      data: {
        date: data.date,
        timeIn: data.timeIn,
        timeOut: data.timeOut,
        dirnneIn: data.dirnneIn,
        dirnneOut: data.dirnneOut
      }
    });
  }
}
