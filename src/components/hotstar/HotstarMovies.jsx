import React from 'react'
import { Link } from 'react-router-dom'

const HotstarMovies = () => {
  return (
    <div style={{textAlign:"center",margin:"20px",height:"200px",backgroundColor:"yellow"}}>
        <h1>MOVIES NAME......</h1>
        <ul>
          <li>
            <Link to="/play/moneyheist">MONEY HEIST</Link>
          </li>
          <li>
            <Link to="/play/kapilsharma">KAPIL SHARMA</Link>
          </li>
          <li>
            <Link to="/play/109998">PUSHPA</Link>
          </li>
        </ul>
      
    </div>
  )
}

export default HotstarMovies
