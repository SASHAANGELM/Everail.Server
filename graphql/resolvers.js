const { Todo, Abyss } = require('./models.js');

const resolvers = {
  Query: {
    todos: async () => {
      return await Todo.find();
    },
    todo: async (_, { id }) => {
      return await Todo.findById(id);
    },

    abysses: async () => {
      return await Abyss.find();
    },
    abyss: async (_, { id }) => {
      return await Abyss.findById(id);
    },
  },
  Mutation: {
    createTodo: async (_, { title, done }) => {
      return await new Todo({ title, done }).save();
    },
    updateTodo: async (_, args) => {
      const id = args.id;
      const data = {
        ...args
      };
      delete data.id;
      await Todo.findByIdAndUpdate(id, data);
      return await Todo.findById(id);
    },
    deleteTodo: async (_, { id }) => {
      return await Todo.findByIdAndDelete(id);
    },

    createAbyss: async (_, { input }) => {
      return await new Abyss(input).save();
    },
    deleteAbyss: async (_, { id }) => {
      return await Abyss.findByIdAndDelete(id);
    },
  }
};

module.exports = resolvers;
