import {gql} from "graphql-tag";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

import {PersonApi} from "../api/person-api.js";
import {resolvers} from "../resolvers/person-resolver.js";

export class ApolloServerProvider {
  async getTypeDefs() {
    let personApi = new PersonApi();
    return gql(await personApi.getSchema());
  }

  async startServer() {
    let typeDefs = await this.getTypeDefs();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const {url} = await startStandaloneServer(server, {
      listen: {port: 4000},
    });
    return url;
  }
}