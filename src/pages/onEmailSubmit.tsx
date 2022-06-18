import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {celebPhoto, theCard, container} from '../css/onEmailSubmit.module.css'
import { Card, Container, Typography } from '@mui/material';

const IndexPage = () => {
  return (
    <Layout pageTitle="Algorithms Book">
    <div className={container}>
        <Card className={theCard}>
        <StaticImage
            className={celebPhoto}
            alt="Celebration"
            src="https://res.cloudinary.com/ava-coding-com/image/upload/v1655540936/Algorithms%20Book/balloons_qhiy9o.png"
        />
        <Typography gutterBottom variant="h2" component="div">
            Congrats!
        </Typography>
        <p>You are rocking it! You are now subscribed to the new chapters!</p>
        </Card>
      </div>
    </Layout>
  )
}

export default IndexPage
