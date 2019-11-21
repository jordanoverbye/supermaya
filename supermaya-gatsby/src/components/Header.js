import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/icons/logo.svg"

const Header = () => {
  return (
    <div className="l-container">
      <header className="l-site-head">
        <a href="/" className="invert-link">
          <span className="l-site-name">
            <Logo />
            {/* TODO This should come from sitemetada */}
            <span className="l-site-title site-title">Supermaya</span>
          </span>
        </a>
        <nav>
          <ul className="l-navigation navigation" aria-label="">
            {navigationItems.map((item, i) => {
              return (
                <li key={i}>
                  {item.external ? (
                    <a href={item.url} rel="external">
                      {item.text}
                    </a>
                  ) : (
                    <Link to={item.url}>{item.text}</Link>
                  )}
                </li>
              )
            })}
            {/* <li>
              <a href="/login" className="l-login" id="keystone-nav-login">
                Login{" "}
                <svg
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ maxWidth: 200 }}
                  fill="none"
                  viewBox="0 0 21 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M20 12H9M12 9l-3 3 3 3"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M17 16v5a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v5"
                  />
                </svg>
              </a>
            </li>
           */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

const navigationItems = [
  {
    text: "Home",
    url: "/",
    external: false,
  },
  {
    text: "Posts",
    url: "/posts",
    external: false,
  },
  {
    text: "Twitter",
    url: "https://twitter.com/MikeRiethmuller",
    external: true,
  },
  {
    text: "GitHub",
    url: "https://github.com/madebymike/supermaya",
    external: true,
  },
  {
    text: "Feed",
    url: "/rss.xml",
    external: true,
  },
]

export default Header
