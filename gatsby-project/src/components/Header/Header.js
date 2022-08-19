import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./Header.css"
import logo from "../../images/logo_b.png"

const Header = () => {
  const [hasScroll, setHasScroll] = useState(false)

  const handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 500) {
      setHasScroll(true)
    } else {
      setHasScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <div className={hasScroll ? "header headerScroll" : "header"}>
        <div className="headerGroup">
          <Link className="logo" to="/">
            <img src={logo} />
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Work</Link>
          <Link to="/">Services</Link>
          <Link to="/">
            <button>Contact Me</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

// useState
