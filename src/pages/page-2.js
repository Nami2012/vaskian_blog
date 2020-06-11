import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import BlogBox from "../components/blogbox"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Blogs" />
    <h1>Heres a list of blogs</h1>
    <BlogBox />
    <Link to="/">Go back to the homepage</Link>
    {data.allMarkdownRemark.edges.map(post =>(
      <li>
          <Link
        key={post.node.id}
        to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
   
      </li>
       ))}
  </Layout>
)

export const pageQuery = graphql `
  query IndexQuery{
    allMarkdownRemark(
      limit:10
      sort:{ fields:[frontmatter___date], order:ASC}
      filter:{ frontmatter: { published: { eq: true}}}){
      edges{
        node{
          frontmatter{
            title
            path
            published
            date
          }
        }
      }
    }
  }
`
export default SecondPage
