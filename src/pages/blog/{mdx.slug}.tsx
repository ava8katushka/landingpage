import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

type FileMdxInfo = {
  frontmatter:  {
      title: string
      description: string
      image: any
      image_alt: string
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
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      image {
        childImageSharp {
        gatsbyImageData (width:300)
        }
       }
      image_alt
    }
  }
}`

export default BlogPost