import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import AirtableUI from "../components/emailCollector"
import {textSegment} from "../css/index.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Algorithms Book">
      <p className={textSegment}>This is a project about algorithms and data structures, which would become a book! The book would be printed on paper, and here are the first two pages of the book.</p>
      <StaticImage
        alt="Time and Space complexity of Algorithms"
        src="https://res.cloudinary.com/ava-coding-com/image/upload/v1647240152/Algorithms%20Book/1st_opening_ooh6yr.png"
      />
      <AirtableUI></AirtableUI>
    </Layout>
  )
}

export default IndexPage
