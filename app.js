const { GraphQLServer } = require('graphql-yoga');
const { importSchema } =  require('graphql-import');
const bodyParser = require('body-parser');
const bodyParserGraphql = require('body-parser-graphql');

const { db } = require('./db/db.js');
const resolvers = require('./graphql/resolvers.js');

const typeDefs = importSchema('./graphql/schema.graphql');

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(bodyParser.json());

// server.use(bodyParser.json());
// server.use(bodyParserGraphql.graphql());

const options = {
  port: process.env.PORT || 4000,
  tracing: true
};

server.start(options, ({port}) => console.log(`Server is running on http://localhost:${port}`));