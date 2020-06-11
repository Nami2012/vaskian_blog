import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledFullBackground from "../components/fullbackground"
const IndexPage = () => (
  <StyledFullBackground>
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <h1>Hi there!</h1>
    <p>I am Namitha .</p>
    <p>You can call me Vaskian!!</p>
    </Layout>
    </StyledFullBackground>
)

export default IndexPage
