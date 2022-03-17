import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

type FileMdxInfo = {
  frontmatter:  {
      title: string
      description: string
  }
  id : string
  body: string
};

type FileQuery = {
  data: {
    mdx : FileMdxInfo
  }
};

const BlogPost = ({ data } : FileQuery) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }`

export default BlogPost