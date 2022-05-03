import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {myphoto, container} from '../css/about.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle={"About me"}>
      <div className={container}>
      <div>
        <p>Hi there! My name is Ava! </p>
        <p>
          I have B.S. in Computer Science at the top Russian University - MIPT.
           My first job was developing a distributed load test at SRE intern in Google NY.
          After that I was offered a job at Google Munich and explored my career interests, being SRE, SWE and UXE.
          At some point I decided to try myself as entrepreneur: with hosting masterminds, selling my art and teaching Computer Science.
          I teached 80+ PMs introduction to Tech, and created my own Course on Algorithms and Data Structures for Software Engineers.
          I also made major improvements to Mozilla Firefox download’s panel as a part of Outreachy program.
        </p>
        <p>
          This is the site for the Algorithms Book I'm writting. I hope it goes handy for Software Engineers, who want to deepen their understanding of Computer Science.
        </p>
        </div>
        <StaticImage
        className={myphoto}
        alt="Ava in New York"
        src="https://drive.google.com/uc?export=view&id=1eHm0tF1n-dONlaOMUtSi1MMnAo0l8Zab"
      />
      </div>
    </Layout>
  )
}

export default AboutPage