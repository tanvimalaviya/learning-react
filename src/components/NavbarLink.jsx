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
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
        </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/movie">MOVIE</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">FORMDEMO1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">FORMDEMO2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">FORMDEMO3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">FORMDEMO4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">FORMDEMO5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">FORMDEMO6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">FORMDEMO7</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo8">FORMDEMO8</Link>
      </li>
      </ul>    
  </div>
</nav>
  )
}

export default NavbarLink
