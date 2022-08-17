import * as React from "react"
import { Link } from "gatsby"
import "./Header.css"
import logo from "../../images/logo_b.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
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

export default Header
