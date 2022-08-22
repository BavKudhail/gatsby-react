import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./Navbar.css"
import logo from "../../images/logo_b.png"

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerGroup">
          <Link className="logo" to="/">
            <img src={logo} />
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Work</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header

// useState
