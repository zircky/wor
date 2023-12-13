import { ObjectType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";

@ObjectType()
export class Wor {
  @Field(type => Int)
  id: number
  @Field(type => GraphQLISODateTime)
  date: string
  @Field(type => GraphQLISODateTime)
  timeIn: string
  @Field(type => GraphQLISODateTime)
  timeOut: string
  @Field(type => GraphQLISODateTime)
  dirnneIn: string
  @Field(type => GraphQLISODateTime)
  dirnneOut: string
}
