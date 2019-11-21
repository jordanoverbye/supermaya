import React from "react"
import { Link, graphql } from "gatsby"

import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Simple Blog" />
      <Hero title={siteTitle}>
        <div className="l-stack">
          <p>
            An 11ty starter kit designed to help you add rich features to a site
            without a complicated build process.
          </p>
          <ul>
            <li>
              <a href="https://heroku.com/deploy?template=https://github.com/MadeByMike/keystone-jamstack-plus">
                Deploy Supermaya + Keystone
              </a>{" "}
              <small>(add user-generated content)</small>
            </li>
            <li>
              <a href="https://app.netlify.com/start/deploy?repository=https://github.com/MadeByMike/supermaya">
                Deploy Supermaya to Netlify
              </a>
            </li>
          </ul>
        </div>
      </Hero>
      <section class="l-container">
        <div className="l-stack">
          <h2 className="h3">Latest posts</h2>
          <ul class="l-post-stack" reversed>
            {posts.map(({ node }, index) => {
              return <BlogPreview key={index} node={node} />
            })}
          </ul>
        </div>
      </section>
      <footer className="l-container">
        <nav className="l-pagination l-pagination--right">
          <Link
            to="/posts"
            dataDirection="forwards"
            className="l-pagination-link l-pagination-link--right"
          >
            <span>See all posts </span>
            <span aria-hidden="true">
              <svg
                focusable="false"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: 200 }}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M2 12h20M15 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </nav>
      </footer>
    </Layout>
  )
}

export default IndexPage

const BlogPreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <li className="post-stack-item">
      <h3 className="h4">
        <Link to={`/posts/${node.fields.slug}`} rel="bookmark">
          {title}
        </Link>
      </h3>
      <p>
        <time class="post-stack-date" datetime={node.frontmatter.date}>
          {node.frontmatter.date}
        </time>
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </li>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
