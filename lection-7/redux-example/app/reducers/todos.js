

export default function todos(state=[], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.todo];
    default:
      return state;
  }
}
