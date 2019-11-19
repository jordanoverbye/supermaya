import React from "react"
import { Link } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

import "../scss/main.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div className="l-page">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
