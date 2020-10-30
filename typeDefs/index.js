import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }
  type Query {
    products: [Product!]!
    getProduct(id: ID!): Product!
  }
  type Mutation {
    newProduct(name: String!, description: String!, price: Float!): Product
  }
`;
