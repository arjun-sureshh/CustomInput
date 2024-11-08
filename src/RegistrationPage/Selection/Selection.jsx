import React from 'react'

const Selection = () => {
  return (
    
        <select
        id={id}
        value={value}
        onChange={onchange}
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
  
  )
}

export default Selection