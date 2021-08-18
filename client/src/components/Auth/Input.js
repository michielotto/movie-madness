import React from 'react'

const Input = ({ autoFocus, name, placeholder, type, handleChange, handleShowPassword }) => {
  return (
    <input 
      required
      autoFocus={autoFocus}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
    />
      
    
  )
}

export default Input
