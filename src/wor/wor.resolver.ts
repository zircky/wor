import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Wor } from './entities/wor.entity';
import { WorService } from "./wor.service";

@Resolver(() => Wor)
export class WorResolver {
  constructor(private readonly worService: WorService) {}

  @Query(() => Wor)
async getAll() {
    return this.worService.getAll()
  }
}
