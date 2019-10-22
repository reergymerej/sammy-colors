import React from 'react'
import { connect } from 'react-redux'
import {
  addColor,
  deleteColor,
  changeColor,
  changeName,
} from '../actions'
import Color from './Color'
import { ChromePicker } from 'react-color'

class App extends React.Component {
  handleChangeName = (event) => {
    const name = event.target.value
    this.props.changeName({
      name,
    })
  }

  handleChangeColor = (color) => {
    const { r, g, b, a } = color.rgb
    this.props.changeColor({
      color: `rgba(${r}, ${g}, ${b}, ${a})`,
    })
  }

  handleAddColor = () => {
    const { color, name } = this.props
    this.props.addColor({
      color,
      name,
    })
  }

  handleDelete = (id) => {
    this.props.deleteColor({ id })
  }

  render() {
    return (
      <div className="container mx-auto my-8">
        <div className="container">
          {this.props.colors.map((color) => {
            return (
              <Color
                key={color.id}
                id={color.id}
                color={color.color}
                name={color.name}
                onDelete={this.handleDelete}
              />
            )
          })}
        </div>

        <div className="container mx-auto my-3">
          <ChromePicker
            color={this.props.color}
            onChangeComplete={this.handleChangeColor}
          />
        </div>

        <div className="container mx-auto my-3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="New Color Name"
            onChange={this.handleChangeName}
            value={this.props.name}
          />
        </div>
        { this.props.canSave &&
          <div className="container mx-auto my-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"

                onClick={this.handleAddColor}>
                Save
              </button>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  canSave: !!(state.color && state.name),
  color: state.color,
  colors: state.colors,
  name: state.name,
})

const mapDispatchToProps = {
  addColor,
  deleteColor,
  changeColor,
  changeName,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
