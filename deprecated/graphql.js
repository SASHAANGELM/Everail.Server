const app = require('./setup');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
 
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type User {
    
  }
`);
 
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app;