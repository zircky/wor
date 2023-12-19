import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Wor } from './entities/wor.entity';
import { WorService } from "./wor.service";

@Resolver('wor')
export class WorResolver {
  constructor(private readonly worService: WorService) {}

  @Query(() => Wor, { name: 'wors' })
  async getWorAll() {
    return this.worService.findAll();
  }
}
