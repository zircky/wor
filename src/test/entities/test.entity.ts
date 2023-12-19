import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(type => Int)
  id: number
  @Field(type => String)
  name: string
  @Field(type => Int)
  age: string
}
