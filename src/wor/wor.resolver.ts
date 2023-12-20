import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Wor } from './entities/wor.entity';
import { WorService } from "./wor.service";
import { CreateWorInput } from "./dto/create-wor.input";

@Resolver('wor')
export class WorResolver {
  constructor(private readonly worService: WorService) {}

  @Query(() => [Wor], { name: "wors" })
  async getWorAll() {
    return this.worService.findAll();
  }

  @Mutation(() => Wor, { name: "createWor" })
  async create(@Args("data") data: CreateWorInput) {
    return this.worService.create(data);
  }
}
