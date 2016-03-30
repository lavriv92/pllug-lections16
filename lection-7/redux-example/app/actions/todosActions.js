

export function addTodo(text) {
  return {
    type: 'ADD',
    todo: {
      text: text
    }
  };
}
