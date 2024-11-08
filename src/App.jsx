import React, { useState } from 'react'
import CustomInput from './Components/CustomInput'
import Styles from './Styles.module.css'
const App = () => {
  const [Registartion, setRegistartion] = useState({
    Name: "",
    Email: ""
  })

  const handleChange = (e) => {
    setRegistartion({
      ...Registartion,
      [e.target.name]: e.target.value
    })

  }

  

  return (
    <div>
      <CustomInput
        type='text'
        placeholder='Enter your name'
        className={Styles.input}
        value={Registartion.Name}
        onchange={handleChange}
        name="Name"
        id="Name"
      />
      <CustomInput
        type='email'
        placeholder='Enter your Email'
        className={Styles.input}
        value={Registartion.Email}
        onchange={handleChange}
        name="Email"
        id="Email"
      />
      {Registartion.Name}
      {Registartion.Email}
      
    </div>
  )
}

export default App