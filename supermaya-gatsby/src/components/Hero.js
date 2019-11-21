import React from "react"

const Hero = ({ children, title }) => {
  return (
    <section className="theme">
      <header className="l-container">
        <div className="l-jumbo">
          <h1>{title}</h1>
          {children}
        </div>
      </header>
    </section>
  )
}

export default Hero
