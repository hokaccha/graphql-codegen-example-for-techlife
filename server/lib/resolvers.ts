import { Resolvers } from "./generated/resolvers";

export const resolvers: Resolvers = {
  Query: {
    recipe: async (_parent, args, _context, _info) => {
      return {
        id: args.id,
        title: "recipe title",
        imageUrl: null,
      };
    },
  },
};
