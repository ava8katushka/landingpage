import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import AirtableUI from "../components/emailCollector"

const IndexPage = () => {
  return (
    <Layout pageTitle="Algorithms Book">
      <p>These are the first two pages of my book:</p>
      <StaticImage
        alt="Time and Space complexity of Algorithms"
        src="https://res.cloudinary.com/ava-coding-com/image/upload/v1647240152/Algorithms%20Book/1st_opening_ooh6yr.png"
      />
      <AirtableUI></AirtableUI>
    </Layout>
  )
}

export default IndexPage
