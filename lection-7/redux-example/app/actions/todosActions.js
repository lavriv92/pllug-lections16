import { ADD, TOGGLE } from '../constants/todosConstants';

export function addTodo(text) {
  return {
    type: ADD,
    id: Date.now() * 100 + Math.random(),
    text: text
  };
}

export function toggleTodo(todoId) {
  return {
    type: TOGGLE,
    id: todoId
  }
}
