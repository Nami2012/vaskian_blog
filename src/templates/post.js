import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Header from "../components/header"

import Footer from "../components/footer"
import StyledFullBackground from "../components/fullbackground"

export default function Template({data}){
    const {markdownRemark:post} = data;
    return (
        <StyledFullBackground>
            
             <div>
                <h1>
                    {post.frontmatter.title}
                    <div dangerouslySetInnerHTML={{__html:post.html}}/>
                </h1>
             </div>
            <Footer/>
        </StyledFullBackground>
        )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq:$path }}){
            html
            frontmatter{
                path
                title
            }
        }
    }
`