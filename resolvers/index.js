import Product from '../models/Product.js';

export const resolvers = {
  Query: {
    products: () => Product.find({}),
    getProduct: (_, { id }) => {
      return Product.findById(id, function (err, product) {
        if (err) return console.error(err);
        return product;
      });
    },
  },
  Mutation: {
    newProduct: (_, { name, description, price }) => {
      const product = new Product({ name, description, price });
      return product.save();
    },
    editProduct: (_, { id, name, description, price }) => {
      return Product.findByIdAndUpdate(
        id,
        { name, description, price },
        function (err, product) {
          if (err) return console.error(err);
          return product;
        }
      );
    },
    deleteProduct: (_, { id }) => {
      return Product.findByIdAndDelete(id, function (err, product) {
        if (err) return console.error(err);
        return product;
      });
    },
  },
};
