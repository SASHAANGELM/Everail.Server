const { Todo, Organization, Member, User } = require('./models.js');

const resolvers = {
  Query: {
    todos: async () => {
      return await Todo.find();
    },
    todo: async (_, { id }) => {
      return await Todo.findById(id);
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
  }
};

module.exports = resolvers;
