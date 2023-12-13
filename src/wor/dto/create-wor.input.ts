import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
