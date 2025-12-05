import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
<nav className="navbar navbar-expand-lg pb-5">
  <div id='navbarcontainer' className="container-fluid fixed-top p-4">
    <Link className="navbar-brand fs-1 fw-bolder text-white ms-5 text-uppercase" to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-5 gap-3 fs-5 fw-bolder">
        <li className="nav-item">
          <NavLink className="nav-link  text-white" aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>






    </>
  )
}
