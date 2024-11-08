import React from 'react'


const Input = ({type,name,id,placeholder,onchange,className}) => {
  return (
    
           
   <input type={type} name={name} id={id} placeholder={placeholder} onChange={onchange} className={className} />
          
        
  )
}

export default Input