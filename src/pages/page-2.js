import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Blogs" />
    <h1>Heres a list of blogs</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
