import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './typeDefs/index.js';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const app = express();

    server.applyMiddleware({ app });

    const PORT = process.env.PORT;

    app.listen({ port: PORT }, () =>
      console.log(`Now browse to http://localhost:${PORT}` + server.graphqlPath)
    );
  } catch (error) {
    console.error(error);
  }
})();
