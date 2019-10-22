import React from 'react'

class Color extends React.Component {
  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }

  render() {
    const {
      name,
      color,
    } = this.props
    return (
      <div
        className="flex"
      >
        <div
          style={{
            textShadow: '1px 1px 20px #bbb',
            color: color,
          }}
          className="text-center text-3xl p-1 m-1 flex-1 font-extrabold tracking-wider"
        >
          {name}
        </div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Color
