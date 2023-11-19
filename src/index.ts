import {ApolloServerProvider} from "./server/apollo-server.js";


const apolloServerProvider = new ApolloServerProvider();
const url = await apolloServerProvider.startServer();

console.log(`🚀  Server ready at: ${url}`);