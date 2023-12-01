import {PersonApi} from "../api/person-api.js";

let personApi = new PersonApi();

export const resolvers = {
  PersonQuery: personApi.externalGetCalls,
  PersonMutation: personApi.externalPostCalls,
};