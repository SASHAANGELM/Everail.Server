const app = require('./graphql.js');

function generateId() {
  return `${Math.floor(Math.random() * 100000000)}`.padStart(8, '0');
}

const todos = [];

app.post('/todos', (req, res) => {
  const { name, done, description } = req.body;
  const id = generateId();

  const todo = {
    id,
    name,
    description,
    done
  }

  todos.push(todo);
  res.send(todo);
});

app.get('/todos', (req, res) => {
  if (req.body.search) {
    const search = req.body.search.toLowerCase();
    const filteredTodos = todos.filter(todo => {
      const name = todo.name.toLowerCase();
      const description = todo.description.toLowerCase();
      return name.includes(search) || description.includes(search);
    });
    res.send(filteredTodos);
  } else {
    res.send(todos);
  }
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === id);
  if (todo != null) {
    res.send(todo);
  } else {
    res.send({
      error: "Todo with this ID not found"
    });
  }
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;

  const todo = todos.find(todo => todo.id === id);

  if (todo != null) {

    const newTodo = {
      ...todo,
      ...req.body,
      id
    };

    const index = todos.indexOf(todo);
    todos.splice(index, 1, newTodo);

    res.send(newTodo);
  } else {
    res.send({
      error: "Todo with this ID not found"
    });
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const todo = todos.find(todo => todo.id === id);

  if (todo != null) {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    res.send(todo);
  } else {
    res.send({
      error: "Todo with this ID not found"
    });
  }
});
