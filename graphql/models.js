const mongoose = require('mongoose');

// Todos
const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean,
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo
}