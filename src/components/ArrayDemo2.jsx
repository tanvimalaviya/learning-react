import React from 'react'

const ArrayDemo2 = () => {
    var students = [{
        name:"ram",
        age:21,
        marks:78 
    },
    {
        name :"shyam",
        age :"25",
        marks:87 
    },{
        name :"kunal",
        age :23,
        marks:98 
    }
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:'red'}}>Array Demo 2</h1>{
            students.map((stu)=>{
                return <div>
                    <h1>Name = {stu.name}</h1>
                    <h2>Age = {stu.age}</h2>
                    <h3>Marks = {stu.marks}</h3>

                </div>

            })
        }
      
    </div>
  )
}

export default ArrayDemo2
