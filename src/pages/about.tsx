import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle={"About me"}>
        <p>This is a page about sexy little baby, me!</p>
        <StaticImage
        alt="Ava in New York"
        src="https://drive.google.com/uc?export=view&id=1eHm0tF1n-dONlaOMUtSi1MMnAo0l8Zab"
      />
    </Layout>
  )
}

export default AboutPage