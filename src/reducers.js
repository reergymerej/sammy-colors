import {
  ADD_COLOR,
  DELETE_COLOR,
  CHANGE_COLOR,
  CHANGE_NAME,
  DECREMENT,
  INCREMENT,
} from './actions'

const initialState = {
  count: 0,
  colors: [],
  color: '',
  name: '',
}

const byName = (a, b) => {
  const aVal = a.name
  const bVal = b.name
  if (aVal < bVal) {
    return -1
  } else if (aVal > bVal) {
    return 1
  }
  return 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }

    case ADD_COLOR:
      return {
        ...state,
        name: '',
        // color: '',
        colors: [
          ...state.colors,
          {
            id: state.colors.length,
            name: action.name,
            color: action.color,
          },
        ].sort(byName),
      }

    case DELETE_COLOR:
      return {
        ...state,
        colors: state.colors.filter(x => x.id !== action.id),
      }

    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }

    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color,
      }

    default:
      return state
  }
}
