import React, { useState } from 'react'
import RegistrationPage from './RegistrationPage/Input/Input'
import Styles from './Styles.module.css'
import TextArea from './RegistrationPage/TextArea/TextArea'
import Input from './RegistrationPage/Input/Input'

const RegMainApp = () => {

  const [Register, setRegister] = useState({
    Name:'',
    Email:'',
    Password:'',
    Textarea:'',
    Gender:'',

  })
 

  const handlechnage = (e) =>{

    setRegister({
      ...Register,
      [e.target.name]: e.target.value
    })
   

  }
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
       <Input
        type='text' 
        name='Name' 
        id='Name'
         placeholder='Enter your name' 
         onchange={handlechnage}
         className={Styles.row} />

         <Input
        type='email' 
        name='Email' 
        id='Email'
         placeholder='Enter your Email' 
         value={Register.Email}
         onchange={handlechnage} 
         className={Styles.row}/>

         <Input
        type='password' 
        name='Password' 
        id='Password'
         placeholder='Create Your Password' 
         value={Register.Password}
         onchange={handlechnage}
         className={Styles.row} />

         <TextArea 
         name='Textarea'
         placeholder='Addres'
         value={Register.Textarea}
         onchange={handlechnage}
         className={Styles.TextArea}
         />
         <div className={Styles.Gender_row}>


         <Input
         type='radio'
        name='Radio' 
        id='Radio' 
         value={Register.Gender}
         onchange={handlechnage} 
         className={Styles.Gender}
         />
         <p>Male</p>
         <Input
         type='radio'
        name='Radio' 
        id='Radio' 
         value={Register.Gender}
         onchange={handlechnage} 
         className={Styles.Gender}
         />
         <p>Female</p>

                  </div>
        
         </div>
    </div>
  )
}

export default RegMainApp