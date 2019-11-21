import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Logo from "./Logo"
import Navigation from "./Navigation"

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
          }
        }
      }
    `
  )
  return (
    <footer role="contentinfo">
      <div class="theme">
        <div class="l-container">
          <div class="l-site-footer">
            <div class="l-site-footer-split">
              <div class="l-stack">
                <Logo className="l-site-name l-site-name--footer" />
                <p
                  dangerouslySetInnerHTML={{
                    __html: site.siteMetadata.description,
                  }}
                />
              </div>
              <Navigation className="l-footer-nav" />
            </div>
            <p class="powered-by">
              Made by {site.siteMetadata.author} with Gatsby and Keystone
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
