import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Ava's blog">
      <p>Fuck you, bitches!!!</p>
      <StaticImage
        alt="Fuck the reality"
        src="https://images.unsplash.com/photo-1582324597727-186650f42085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      />
    </Layout>
  )
}

export default IndexPage
