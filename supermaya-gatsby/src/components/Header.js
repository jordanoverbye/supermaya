import React from "react"
import { Link } from "gatsby"

import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = () => {
  return (
    <div className="l-container">
      <header className="l-site-head">
        <Link to="/" className="invert-link">
          <Logo className="l-site-name" />
        </Link>
        <Navigation />
      </header>
    </div>
  )
}

export default Header
