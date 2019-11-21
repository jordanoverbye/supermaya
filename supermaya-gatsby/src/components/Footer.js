import React from "react"
import { Link } from "gatsby"

import Logo from "../assets/icons/logo.svg"

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div class="theme">
        <div class="l-container">
          <div class="l-site-footer">
            <div class="l-site-footer-split">
              <div class="l-stack">
                <div class="l-site-name l-site-name--footer">
                  <Logo />
                  {/* TODO This should come from sitemetada */}
                  <span className="l-site-title site-title">Supermaya</span>
                </div>
                <p>
                  An 11ty starter kit designed to help you add rich features to
                  a site without a complicated build process.
                </p>
              </div>
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
                </ul>
              </nav>
            </div>
            <p class="powered-by">Made by TODO with Gatsby and Keystone</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

{
  /* <footer role="contentinfo">
  <div class="theme">
    <div class="l-container">
      <div class="l-site-footer">
        <div class="l-site-footer-split">
          <div class="l-stack">
            <div class="l-site-name l-site-name--footer">
              {% include "partials/icons/logo.svg" %}
              <div class="l-site-title site-title">{{ site.name }}</div>
            </div>
            {% if site.shortDesc %}
              <p>{{ site.shortDesc }}</p>
            {% endif %}
          </div>
          <div class="l-footer-nav">
            {% set navLocation = 'footer' %}
            {% include "partials/nav.njk" %}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</footer> */
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

export default Footer
