import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:'flex',backgroundColor:"black",color:"white"}}>
        <h1>Navbar</h1>
        <ul style={{display:"flex",gap:"20px",listStyle:"none",margin:"27px",width:"100%",padding:"0",fontSize:"18px",justifyContent:"end"}}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <p></p>
        </ul>
</div>
  )
}

export default Navbar
