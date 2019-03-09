import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RightIcon } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  LinkStyle,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const INDEX_POST_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogSectionWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.desktop} {
    width: 95%;
  }
`

const BlogContainer = styled.div`
  width: 33%;
  display: flex;

  @media ${device.tabletL} {
    width: 70%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`

const BlogBlock = styled.div``

const BlogImage = styled(Img)`
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const BlogLink = styled(LinkStyle)`
  margin: 1rem 0 0 0;
`

const BlogSection = () => (
  <StaticQuery
    query={INDEX_POST_QUERY}
    render={({ allMarkdownRemark }) => (
      <BlogSectionWrapper>
        <HeadingStyle>Growth tips for small businesses</HeadingStyle>
        <BlogContainer>
          {allMarkdownRemark.edges.map(edge => (
            <BlogBlock key={edge.node.frontmatter.slug}>
              <BlogImage
                sizes={
                  edge.node.frontmatter.featuredImage.childImageSharp.sizes
                }
              />
              <SubHeadingStyle>{edge.node.frontmatter.title}</SubHeadingStyle>
              <ParagraphStyle>{edge.node.excerpt}</ParagraphStyle>
              <BlogLink to={`posts${edge.node.frontmatter.slug}`}>
                Read More <RightIcon />
              </BlogLink>
            </BlogBlock>
          ))}
        </BlogContainer>
      </BlogSectionWrapper>
    )}
  />
)

export default BlogSection
