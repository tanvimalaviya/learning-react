import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="home">Home <span class="sr-only">(current)</span></Link>
        </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="movie">MOVIE</Link>
      </li>
      </ul>    
  </div>
</nav>
  )
}

export default NavbarLink
