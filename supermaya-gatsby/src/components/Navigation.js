import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Navigation = ({ className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
              twitter
            }
          }
        }
      }
    `
  )

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
      url: `https://twitter.com/${site.siteMetadata.social.twitter}`,
      external: true,
    },
    {
      text: "GitHub",
      url: `https://github.com/${site.siteMetadata.social.github}`,
      external: true,
    },
    {
      text: "Feed",
      url: "/rss.xml",
      external: true,
    },
  ]

  return (
    <nav className={className}>
      <ul className="l-navigation navigation">
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
  )
}

export default Navigation
