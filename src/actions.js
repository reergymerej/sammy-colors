export const ADD_COLOR = 'ADD_COLOR'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_NAME = 'CHANGE_NAME'
export const DECREMENT = 'DECREMENT'
export const DELETE_COLOR = 'DELETE_COLOR'
export const INCREMENT = 'INCREMENT'

export const increment = () => ({ type: INCREMENT })

export const decrement = () => ({ type: DECREMENT })

export const deleteColor = ({ id }) => ({
  id,
  type: DELETE_COLOR,
})

export const addColor = ({ color, name }) => ({
  color,
  name,
  type: ADD_COLOR,
})

export const changeName = ({ name }) => ({
  name,
  type: CHANGE_NAME,
})

export const changeColor = ({ color }) => ({
  color,
  type: CHANGE_COLOR,
})
