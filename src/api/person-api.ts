import {RESTDataSource} from "@apollo/datasource-rest";

export class PersonApi extends RESTDataSource {
  baseURL = "http://localhost:8080";

  externalGetCalls = {
    people: async () => await this.get('/people/all'),
    getPerson: async (parent, args, context, info) => {
      return await this.get('/people',
          {params: args});
    },
  }
  externalPostCalls = {
    createPerson: async (parent, input, context) => {
      return await this.post('/people/create', {body: input['createPerson']})
    }
  }

  getSchema = async () => await this.get('/personSchema')

}