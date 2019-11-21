import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../scss/main.scss"

const Layout = ({ children }) => {
  return (
    <div className="l-page">
      <Header />
      <main id="main-content">
        <div className="l-stack l-stack--large">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
