import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledFullBackground from "../components/fullbackground"
const IndexPage = () => (
  <StyledFullBackground>
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`
                   }}>
      <Image />
    </div>
    
    <h1 style={{ fontFamily: `Lucida Console, Courier, monospace`,
                  
                   }}
                   >Hi there!</h1>
    <p style={{ fontFamily: `Lucida Console, Courier, monospace`,
                  
                }}
        >I am Namitha.I am a 3rd year Computer Science and Engineering Student
         from TKM College Of Engineering .
         <br />
         I do backend development and hold a good knowledge in C++.My interest in further learning lies in
         Computer Networks,Natural Language Processing,Functional Programming in that order.<br/>
         <br/>
         <br/>
         Have something to talk about? <br/>
         mail me @ namithasadeeshbabu@gmail.com
         </p>

    </Layout>
    </StyledFullBackground>
)

export default IndexPage
