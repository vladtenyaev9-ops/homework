"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

let todos = [];

const errTodoNotFound = todoId => `todo with id ${todoId} is not found`;

const getNewId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

// const deleteTodoById = (todos, todoId) => {
//   const todo = todos.find(todo => todo[todoKeys.id] === todoId);
//   if (todo === undefined) {
//     console.error(errTodoNotFound(todoId));
//     return null;
//   }
//   return todos.filter(todo => todo[todoKeys.id] !== todoId)
// };

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const editTodoById = (todos, todoId, text) => {
  return todos.map(todo => {
    if (todo[todoKeys.id] === todoId) {
      return { ...todo, [todoKeys.text]: text };
    }
    return todo;
  });
};
