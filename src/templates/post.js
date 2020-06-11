import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Header from "../components/header"

import Footer from "../components/footer"
import StyledFullBackground from "../components/fullbackground"

export default function Template({data}){
    const {markdownRemark:post} = data;
    return (
            <div>
             <div>
                <h1>
                    {post.frontmatter.title}</h1>

                    <div dangerouslySetInnerHTML={{__html:post.html}}/>
             </div>
            </div>
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