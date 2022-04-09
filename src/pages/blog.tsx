import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { FormControlUnstyledContext } from '@mui/base';

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
    <Layout pageTitle={"Solutions to Leetcode problems"}>
      <ImageList variant="masonry" cols={3} sx={{ width: 900 }}>
      {
        data.allMdx.nodes.map(node => (
          <ImageListItem key={node.id} sx={{maxWidth: '300px'}}>
            <Link to={'/blog/' + node.slug.toLowerCase()}>
            <GatsbyImage
                image={getImage(node.frontmatter.image)}
                alt={node.frontmatter.image_alt}
            />
            <ImageListItemBar
            title={node.frontmatter.title}
            subtitle={node.frontmatter.description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${node.frontmatter.title}`}
              >
              </IconButton>
            }
          />
          </Link>
          </ImageListItem>
        ))
      }
      </ImageList>
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
            gatsbyImageData
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