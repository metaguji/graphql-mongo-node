import Product from '../models/Product.js';

export const resolvers = {
  Query: {
    products: () => Product.find(),
    getProduct: (_, { id }) => Product.findById({ _id: id }),
  },
  Mutation: {
    newProduct: async (_, { name, description, price }) => {
      const product = new Product({ name, description, price });
      await product.save();
      return product;
    },
  },
};
