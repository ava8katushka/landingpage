import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  all,
  appBar,   
  navBox,
  navMain,
  navItem,
  iconStyle,
} from './layout.module.css'
import Footer from './footer';
import { StaticImage } from 'gatsby-plugin-image'
import { Box,  Typography,  Container, CssBaseline } from '@mui/material';

type LayoutEl = {
    pageTitle: string,
    children: any
};

const Layout = ({pageTitle, children}: LayoutEl) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`);
  return (
    <div className={all}>
    <nav className={appBar}>
    <StaticImage className={iconStyle}
        alt="Book logo"
        src="https://res.cloudinary.com/ava-coding-com/image/upload/v1651588574/Algorithms%20Book/bookshelf_cpwgnc.png"
      />
        <div className={navMain}>{pageTitle}</div>
        <Box className={navBox}>
            <Link className={navItem} to="/" >Home</Link>
            <Link className={navItem} to="/about" >About</Link>
            <Link className={navItem} to="/blog"> Blog</Link>
        </Box>
    </nav>
    <Container>
      <main>
        {children}
      </main>
      <CssBaseline />
    </Container>
     <Footer></Footer>
     </div>
  )
}
export default Layout