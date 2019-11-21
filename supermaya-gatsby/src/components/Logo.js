import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LogoSvg from "../assets/icons/logo.svg"

const Logo = ({ className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <span className={className}>
      <LogoSvg />
      <span className="l-site-title site-title">{site.siteMetadata.title}</span>
    </span>
  )
}

export default Logo
