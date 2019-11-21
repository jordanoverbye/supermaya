import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Gatsby Supermaya Demo" />
        <section className="theme">
          <header className="l-container">
            <div className="l-jumbo">
              <h1>{siteTitle}</h1>
              <div className="l-stack">
                <p>
                  An 11ty starter kit designed to help you add rich features to
                  a site without a complicated build process.
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
            </div>
          </header>
        </section>
        <section class="l-container">
          <div className="l-stack">
            <h2 className="h3">Latest posts</h2>
            <ul class="l-post-stack" reversed>
              {posts.map(({ node }, index) => {
                return <BlogPostPreview key={index} node={node} />
              })}
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

const BlogPostPreview = ({ node }) => {
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

export default BlogIndex

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
