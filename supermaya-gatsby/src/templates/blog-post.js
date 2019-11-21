import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
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
      </div>
      <div className="l-container">
        <Comments />
      </div>
    </Layout>
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

//     <div class="l-container">
//     {/* <style>.l-comment-name{display:flex;align-items:center}.l-comment-name>*+*{margin-left:1rem}.keystone-comments{list-style:none}.keystone-comments>*+*{margin-top:1rem}.keystone-comment{border:solid 1px #ccc;padding:1rem}.comment-date{color:#767676;font-size:.71429rem}.l-comment-meta{display:flex;flex-direction:column}.js-keystone-comment-form>*+*{margin-top:1rem}</style> */}
//     <div class="l-stack"><div id="keystone-comments" class="l-stack">
//   <h2>Comments</h2>
// </div><hr /><div id="keystone-comments-form" class="l-stack">

// </div></div></div> */}

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
      }
    }
  }
`
