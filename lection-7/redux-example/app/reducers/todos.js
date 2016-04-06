import { ADD, TOGGLE } from '../constants/todosConstants';

function todo(state, action) {
  switch (action.type) {
    case ADD:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE:
      if(state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
}

export default function todos(state=[], action) {
  switch (action.type) {
    case ADD:
      return [...state, todo(undefined, action)];
    case TOGGLE:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}
