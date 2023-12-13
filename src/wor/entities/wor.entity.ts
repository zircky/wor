import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Wor {
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
