import { Module } from '@nestjs/common';

import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { PrismaService } from "./PrismaService";
import { WorModule } from './wor/wor.module';

@Module({

  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    autoSchemaFile: './src/schema.gql'
  }), WorModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
