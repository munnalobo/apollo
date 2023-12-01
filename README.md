# apollo

### Resolvers

```
const resolvers = {
  Query: {
    books: () => books
  },
};
```

`Query` ( Word ) should be the same as the `type` name in graphql schema where
you have all the Query operations.

in our case `PersonQuery` so, we can write this as

``` 
const resolvers = {
  PersonQuery: {
    getPerson: () => < However you want to get and return data >
  },
};
```

as resolvers is just a JSON object we took it one step further and get all the functions needed
directly from API class where we are calling the back end from.
so, it evolved to

```
export const resolvers = {
  PersonQuery: personApi.externalCalls,
};

```

### Personal Notes:

Import's has to be like this with `.js` extension to the file name inorder
to use the exports from the file.

#### import {PersonApi} from "./api/Person-api.js";

### Async, Await and Arguments

```
externalCalls = {
    people: async () => await this.get('/people/all'),
    getPerson: async (parent, args, context, info) => {
      return await this.get('/people',
          {params: args});
    }
  }
```

` (parent, args, context, info)` this is how we have to get arguments from query.

This is how we can consume from a graphql file instead of defining everything in the same file.
`typeDefs = gql(fs.readFileSync(path.join("src/schema", "person-schema.graphql"), 'utf-8'));`

### Mutations

To separate mutations from queries, we made a different variable for post calls which has

```
createPerson: async (parent, input, context) => {
      return await this.post('/people/create', {body: input['createPerson']})
    }
```

In the above function `input` will be the data you receive to mutation.
as the data is structured as below, we need `input['createPerson']` to get the structure we are
sending to backend.

```
{
  "createPerson": {
    "firstName": "firstName",
    "lastName": "lastName",
  "ethnicity": "hello"
  }
}
```

#### -------------------------------------- END OF DOCUMENTATION------------------------------------
