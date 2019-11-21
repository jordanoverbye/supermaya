import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="l-stack">
        <article className="h-entry t-page">
          <header className="l-container">
            <div className="l-post-intro">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </header>
          <div className="l-stack l-stack--large">
            <div className="l-container">
              <div
                className="l-stack"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </article>
        <div className="l-container">
          <footer className="l-stack">
            <h2>Tags</h2>
            <div className="l-stack-footer">
              <Tags tags={post.frontmatter.tags} />
            </div>
          </footer>
        </div>
      </div>
      <div className="l-container">
        <Comments />
      </div>
    </Layout>
  )
}

const Tags = ({ tags }) => {
  return (
    <ul className="l-post-tags">
      {tags.map((tag, index) => (
        <li key={index}>
          <Link className="post-tag" to="/tags/demo-content">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Comments = () => {
  return (
    <form className="js-keystone-comment-form">
      <h3>Join the discussion</h3>
      <input type="hidden" name="path" value="/posts/no-build-process/" />
      <div className="l-form-row">
        <label>Name</label>
        <input type="text" name="name" className="input" />
      </div>
      <div className="l-form-row">
        <label>Email</label>
        <input type="text" name="email" className="input" />
      </div>
      <div className="l-form-row">
        <label>Comment</label>
        <textarea name="body" className="textarea" />
      </div>
      <div className="l-form-row">
        <button type="submit" className="button">
          Share opinion
        </button>
      </div>
    </form>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
