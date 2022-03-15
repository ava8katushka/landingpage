import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type FilesMdxData = {
    data : {
    allMdx: {
        nodes: Array<FileMdxInfo>;
    }
  }
};

type FileMdxInfo = {
    frontmatter:  {
        title: string
        description: string
    }
    id : string
    body: string
};

const BlogPage = ({ data }: FilesMdxData) => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {
        data.allMdx.nodes.map(node => (
            <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql `query {
    allMdx {
      nodes {
        frontmatter {
          title
          description
        }
        id
        body
      }
    }
  }
  
  `

export default BlogPage