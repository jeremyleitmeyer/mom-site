import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/utils/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about Margie" />
    <h1>Here you can write some stuff about Margie!</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default AboutPage
