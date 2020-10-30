import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './typeDefs/index.js';
import mongoose from 'mongoose';
import express from 'express';

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: 3000 }, () =>
      console.log('Now browse to http://localhost:3000' + server.graphqlPath)
    );
  } catch (error) {
    console.error(error);
  }
})();
