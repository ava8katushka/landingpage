import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {   
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import Footer from './footer';
import { CssBaseline } from '@mui/material';

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
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <CssBaseline />
      <Footer></Footer>
    </div>
  )
}
export default Layout