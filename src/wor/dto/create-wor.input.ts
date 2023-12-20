import { InputType, Int, Field, GraphQLISODateTime } from "@nestjs/graphql";

@InputType()
export class CreateWorInput {
  @Field(type => Int)
  id: number
  //@Field(type => GraphQLISODateTime, { nullable: true })
  @Field({ nullable: true })
  date?: string
  // @Field(type => GraphQLISODateTime,{ nullable: true })
  @Field({ nullable: true })
  timeIn?: string
  // @Field(type => GraphQLISODateTime, { nullable: true })
  @Field({ nullable: true })
  timeOut?: string
  // @Field(type => GraphQLISODateTime,{ nullable: true })
  @Field({ nullable: true })
  dirnneIn?: string
  // @Field(type => GraphQLISODateTime,{ nullable: true })
  @Field({ nullable: true })
  dirnneOut?: string
}
