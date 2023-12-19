import { ObjectType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";

@ObjectType()
export class Wor {
  @Field(type => Int)
  id: number
  @Field({ nullable: true })
  date?: string
  @Field({ nullable: true })
  timeIn?: string
  @Field({ nullable: true })
  timeOut?: string
  @Field({ nullable: true })
  dirnneIn?: string
  @Field({ nullable: true })
  dirnneOut?: string
}
