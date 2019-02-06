import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { RightIcon } from './styles/IconStyles'
import { SubHeadingStyle, ParagraphStyle, LinkStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const GROWTH_POST_QUERY = graphql`
  query GrowthPostArchive {
    allMarkdownRemark(
      limit: 5
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

const GrowthWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    grid-template-columns: 1fr;
  }

  @media ${device.tabletL} {
    width: 90%;
  }
`

const GrowthContainer = styled.div`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.textSpace};
  }
`

const BlogBlock = styled.div`
  width: 70%;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: ${props => props.theme.textSpace};
  }
`

const BlogImage = styled(Img)`
  margin-bottom: 1rem;
`

const BlogLink = styled(LinkStyle)`
  margin: 1rem 0 0 0;
`

const ArchiveContainer = styled.div`
  width: 100%;

  @media ${device.desktop} {
    margin: 0 auto ${props => props.theme.textSpace} auto;
    text-align: center;
  }
`

const ArchiveHeading = styled.h4`
  font-size: 2.2rem;
`

const ArchiveLink = styled(Link)`
  font-size: 1.8rem;
  color: ${props => props.theme.secondary};
  display: block;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
  :hover {
    color: ${props => props.theme.secondaryLight};
  }
`

const GrowthTipsBlog = () => (
  <StaticQuery
    query={GROWTH_POST_QUERY}
    render={({ allMarkdownRemark }) => (
      <GrowthWrapper>
        <GrowthContainer>
          {allMarkdownRemark.edges.map(edge => (
            <BlogBlock key={edge.node.frontmatter.slug}>
              <BlogImage
                sizes={
                  edge.node.frontmatter.featuredImage.childImageSharp.sizes
                }
              />
              <SubHeadingStyle>{edge.node.frontmatter.title}</SubHeadingStyle>
              <ParagraphStyle>{edge.node.excerpt}</ParagraphStyle>
              <BlogLink to={`/posts${edge.node.frontmatter.slug}`}>
                Read More <RightIcon />
              </BlogLink>
            </BlogBlock>
          ))}
        </GrowthContainer>
        <ArchiveContainer>
          <ArchiveHeading>Archive</ArchiveHeading>
          {allMarkdownRemark.edges.map(edge => (
            <ArchiveLink
              key={edge.node.frontmatter.slug}
              to={`/posts${edge.node.frontmatter.slug}`}
            >
              {edge.node.frontmatter.title}
            </ArchiveLink>
          ))}
        </ArchiveContainer>
      </GrowthWrapper>
    )}
  />
)

export default GrowthTipsBlog
