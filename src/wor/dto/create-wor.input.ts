import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorInput {
  @Field(type => Int)
  id: number
  @Field()
  date?: string
  @Field()
  timeIn?: string
  @Field()
  timeOut?: string
  @Field()
  dirnneIn?: string
  @Field()
  dirnneOut?: string
}
