import { CreateWorInput } from './create-wor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorInput extends PartialType(CreateWorInput) {
  @Field(() => Int)
  id: number;
}
