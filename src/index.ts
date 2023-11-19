import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import gql from "graphql-tag";

import {resolvers} from "./resolvers/person-resolver.js";
import {PersonApi} from "./api/person-api.js";

let personApi = new PersonApi();
let typeDefs = gql(await personApi.getSchema());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);