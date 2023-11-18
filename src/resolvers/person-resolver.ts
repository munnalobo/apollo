import {PersonApi} from "../api/Person-api.js";

let personApi = new PersonApi();

export const resolvers = {
  PersonQuery: personApi.externalCalls,
};