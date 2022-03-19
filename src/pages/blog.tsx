import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
        image: any
        image_alt: string
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
            <GatsbyImage
                image={getImage(node.frontmatter.image)}
                alt={node.frontmatter.image_alt}
            />
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
          image {
            childImageSharp {
            gatsbyImageData (width:300)
            }
           }
        }
        id
        slug
      }
    }
  }
  
  `

export default BlogPage