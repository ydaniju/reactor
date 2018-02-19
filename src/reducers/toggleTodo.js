const expect = require("expect");
const deepFreeze = require("deep-freeze");

const toggleTodo = (todo) => {
  return {...todo, completed: !todo.completed}
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn React',
    completed: false
  }

  const todoAfter = {
    id: 0,
    text: 'Learn React',
    completed: true
  }

  deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}


testToggleTodo();
console.log("It works!!!");
