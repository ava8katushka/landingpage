import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
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
    slug: string
};

const BlogPage = ({ data }: FilesMdxData) => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={'/blog/' + node.slug.toLowerCase()}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.description}</p>
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
        slug
      }
    }
  }
  
  `

export default BlogPage