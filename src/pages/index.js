import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/utils/seo'
import Container from '../components/framework/container'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`margie`, `instagram`, `art`]} />
    <Container>
      <h1>Welcome to Margie's Website</h1>
      <p>This is her portfolio site!</p>
      <Link to='/about'>This is a link to her about page!</Link>
    </Container>
  </Layout>
)

export default IndexPage
