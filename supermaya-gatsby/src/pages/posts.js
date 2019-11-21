import React from "react"
import { Link, graphql } from "gatsby"

import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PostsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Posts" />
      <Hero title="Posts" />
      <section class="l-container">
        <div className="l-stack">
          <ul class="l-post-list" reversed>
            {posts.map(({ node }, index) => {
              return <BlogPostPreview key={index} node={node} />
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default PostsPage

const BlogPostPreview = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <li className="post-stack-item">
      <h2 className="h3">
        <Link to={`/posts/${node.fields.slug}`} rel="bookmark">
          {title}
        </Link>
      </h2>
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
      <p>
        <Link
          to={`/posts/${node.fields.slug}`}
          aria-hidden="true"
          className="read-more"
        >
          Read more
        </Link>
      </p>
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
