const mongoose = require('mongoose');

// Todos
const todoSchema = new mongoose.Schema({
  title: String,
  done: Boolean,
});
const Todo = mongoose.model('Todo', todoSchema);

// Abyss
const abyssSchema = new mongoose.Schema({
  type: String,
  level: Number,
  Looted: Number,
  earn: [{
    id: Number,
    name: String,
    count: Number
  }],
  spend: [{
    id: Number,
    name: String,
    count: Number
  }]
});
const Abyss = mongoose.model('Abyss', abyssSchema);

module.exports = {
  Todo,
  Abyss
}