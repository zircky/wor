import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorService } from './wor.service';
import { Wor } from './entities/wor.entity';
import { CreateWorInput } from './dto/create-wor.input';
import { UpdateWorInput } from './dto/update-wor.input';

@Resolver(() => Wor)
export class WorResolver {
  constructor(private readonly worService: WorService) {}

  @Mutation(() => Wor)
  createWor(@Args('createWorInput') createWorInput: CreateWorInput) {
    return this.worService.create(createWorInput);
  }

  @Query(() => [Wor], { name: 'wor' })
  findAll() {
    return this.worService.findAll();
  }

  @Query(() => Wor, { name: 'wor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.worService.findOne(id);
  }

  @Mutation(() => Wor)
  updateWor(@Args('updateWorInput') updateWorInput: UpdateWorInput) {
    return this.worService.update(updateWorInput.id, updateWorInput);
  }

  @Mutation(() => Wor)
  removeWor(@Args('id', { type: () => Int }) id: number) {
    return this.worService.remove(id);
  }
}
