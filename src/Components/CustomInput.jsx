import React from 'react'
import PropTypes from 'prop-types';

const CustomInput = ({type,placeholder,className,value,onchange,name,id}) => {
  return (
    <div>
        <input type={type} name={name} id={id} placeholder={placeholder} className={className} value={value} onChange={onchange}/>
    </div>
  )
}
CustomInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
  };
  
 

export default CustomInput