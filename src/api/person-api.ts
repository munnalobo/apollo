import {RESTDataSource} from "@apollo/datasource-rest";

export class PersonApi extends RESTDataSource {
  baseURL = "http://localhost:8080";

  externalCalls = {
    people: async () => await this.get('/people/all'),
    getPerson: async (parent, args, context, info) => {
      return await this.get('/people',
          {params: args});
    }
  }

  getSchema = async () => await this.get('/personSchema')

}