import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo2 = () => {
  const{register,handleSubmit}=useForm()
  const submitHandler = (data)=>{
    console.log("data..",data)
  } 
  return (
    <div style={{textAlign:"center"}}>
      <h1>USER ADMIN</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type='text' placeholder='enter name' {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type='text' placeholder='enter age' {...register("age")}></input>
        </div>
        <div>
          <label>BUDGET</label>
          <input type='number' placeholder='enter budget' {...register("budget")}></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE: <input type='radio' value="male" name='gender' {...register("gender")}></input> 
          FEMALE: <input type='radio' value="female" name='gender' {...register("gender")}></input>
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  )
}

export default FormDemo2
