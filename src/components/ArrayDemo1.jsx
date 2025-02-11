import React from 'react'

const ArrayDemo1 = () => {
    var users = ["kunal","amit","raj","parth","shyam"]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:'blue'}}>Array Demo 1</h1>
        {
            users.map((user)=>{
                return<li>{user}</li>

            })
        }
      
    </div>
  )
}

export default ArrayDemo1
