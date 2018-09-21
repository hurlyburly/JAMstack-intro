import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
    <p>My name is Kalsang and I'm excited to attend the freeCodeCamp hackathon in San Francisco.</p>
    <p>I would love to build something great with a bunch of other coders.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
