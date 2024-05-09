import React from 'react'
import { useState } from 'react'
const UserLogin  = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')


const inputHandler=(event)=>{
    let spanForEmailValidation=document.querySelector('.valid-email');
if(event.target.value.substr(event.target.value.length - 3)=='.ru'){
    setEmail(event.target.value)
    spanForEmailValidation.style.display='none'

    
}
else{
    spanForEmailValidation.style.display='block'

}
}
const inputHandlerPassword=(event)=>{
    let spanForPasswordValidation=document.querySelector('.valid-password');
    if(event.target.value.length<8){

       spanForPasswordValidation.style.display='block'
    }else{
       spanForPasswordValidation.style.display='none'

        setPassword(event.target.value)
    }

}

  return (
    <div>
      <form action="">
        <label htmlFor="">Enter Your Mail</label>
        <br /><br />
        <input type="email" name=""  placeholder='Enter your mail...' onKeyUp={(e)=>{inputHandler(e)}}/>
    <span className='valid-email'><br /> Uzanti .ru olmalidir</span>
        <br /><br />

        <label htmlFor="">Enter Your Password</label>
        <br />
        <input type="password" name=""  onKeyUp={(e)=>{inputHandlerPassword(e)}} />
        
        <span className='valid-password'><br />Uzunluq min 8 olmalidi  olmalidir</span>
        <br /><br />
<button >Login</button>
      </form>
    </div>
  )
}

export default UserLogin 
