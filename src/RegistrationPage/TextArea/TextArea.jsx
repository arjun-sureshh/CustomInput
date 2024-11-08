import React from 'react'


const TextArea = ({name,onchange,placeholder,className}) => {
  return (
   
        <textarea name={name} onChange={onchange} placeholder={placeholder} className={className}>

        </textarea>

    
  )
}

export default TextArea