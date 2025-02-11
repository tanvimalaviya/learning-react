import React, { useState } from 'react'

const InputDemo2 = () => {
  const [name, setname] = useState("")
  const [AGE, setAGE] = useState()
  const [mobileno, setmobileno] = useState()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState()
 
//   const nameHandler =(event)=>{
//     console.log(event.target.value)
//     setname(event.target.value)
// }

      // const age = (event)=>{
      //   console.log(event.target.value )
      //   setage(event.target.value)

      // }



  return (
    <div style={{textAlign:"center"}}>
      <form>
      <h1>USER ADMIN</h1>
      <div>
        <label>NAME</label>
        {/* <input type="text" placeholder='enter name' onChange={(event)=>{nameHandler(event)}}></input> */}

        <input type="text" placeholder='enter name' onChange={(event)=>{setname(event.target.value)}}></input>
        {name}
      </div>
      <div>
        <label>AGE</label>
        {/* <input type='number' placeholder='enter age' onChange={(event)=>{age(event)}}></input> */}
        <input type="number" placeholder='enter age' onChange={(event)=>{setAGE(event.target.value)}}></input>
        {AGE}
      </div>
      <div>
        <label>MOBILE NO.</label>
        <input type='tel' placeholder='enter mobile no.' onChange={(event)=>{setmobileno(event.target.value)}}></input>
        {mobileno}
      </div>
      <div>
        <label>EMAIL ID</label>
        <input type='text' placeholder='enter email id' onChange={(event)=>{setemail(event.target.value)}}></input>
        {email}
      </div>
      <div>
        <label>PASSWORD</label>
        <input type='password' placeholder='enter password' onChange={(event)=>{setpassword(event.target.value)}}></input>
        {password}
      </div>
      </form>
      <button>SUBMIT</button>
    </div>
  )
}

export default InputDemo2

