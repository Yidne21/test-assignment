import React from 'react'
import './Button.css'

function Button({ lable, handleClick }) {
  return (
    <button className="button" onClick={handleClick}>{lable}</button>
  )
}

export default Button