import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StyledFullBackground from "../components/fullbackground"

import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <StyledFullBackground>
  
  <Layout>
    <SEO title="Blogs" />
    <h1 style={{ color:`white`}}>Heres a list of blogs</h1>
    
    <Link style={{ color:`white`,
                    textDecoration: `none`}} to="/">Go back to the homepage</Link>
    {data.allMarkdownRemark.edges.map(post =>(
      <li>
          <Link
            key={post.node.id}
            to={post.node.frontmatter.path}
            style={{ color:`white`,
                    textDecoration: `none`}}
            >{post.node.frontmatter.title}
          </Link>
   
      </li>
       ))}
  </Layout>
  </StyledFullBackground>
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
