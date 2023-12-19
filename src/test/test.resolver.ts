import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestService } from './test.service';
import { Test } from './entities/test.entity';
@Resolver('test')
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  // @Mutation(() => Test)
  // createTest(@Args('createTestInput') createTestInput: CreateTestInput) {
  //   return this.testService.create(createTestInput);
  // }
  //
  // @Query(() => [Test], { name: 'test' })
  // findAll() {
  //   return this.testService.findAll();
  // }
  //
  // @Query(() => Test, { name: 'test' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.testService.findOne(id);
  // }
  //
  // @Mutation(() => Test)
  // updateTest(@Args('updateTestInput') updateTestInput: UpdateTestInput) {
  //   return this.testService.update(updateTestInput.id, updateTestInput);
  // }
  //
  // @Mutation(() => Test)
  // removeTest(@Args('id', { type: () => Int }) id: number) {
  //   return this.testService.remove(id);
  // }

  @Query(() => Test, {name: 'tests'})
  async getTestAll() {
    return this.testService.findAll();
  }
}
