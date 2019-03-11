import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from './layout'
import { device } from './styles/MediaQueries'
import { ParagraphStyle } from './styles/TextStyles'
import BlogSection from './blogSection'

const PostWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.tabletL} {
    width: 80%;
  }
`

const PersonContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    span {
      display: block;
    }
  }
`

const PostImg = styled(Img)`
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
  border-radius: 50%;
  box-shadow: ${props => props.theme.bs};
`

const PostContainer = styled.div`
  margin: ${props => props.theme.sectionSpace} 0;

  h2 {
    margin-bottom: ${props => props.theme.textSpace};
    padding-left: 1.5rem;
    text-transform: capitalize;
    font-size: 3.8rem;
    font-weight: 700;
    color: ${props => props.theme.primary};
    border-left: 3px solid ${props => props.theme.secondaryLight};
    :not(:first-child) {
      margin-top: ${props => props.theme.textSpace};
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2.4rem;
    color: ${props => props.theme.primary};
    :after {
      content: '';
      height: 1px;
      width: 150px;
      margin-top: 1.5rem;
      background: ${props => props.theme.secondaryLight};
      display: block;
    }
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 2.4rem;
    color: ${props => props.theme.primary};
  }

  p {
    color: ${props => props.theme.primaryLight};
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.8;
    :not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  ul {
    width: 80%;
    margin: ${props => props.theme.textSpace} auto;
    padding: 2rem 1.5rem;
    list-style: none;
    background: ${props => props.theme.lightestGrey};
    border-radius: 4px;

    @media ${device.tablet} {
      width: 90%;
    }

    @media ${device.tabletS} {
      width: 100%;
    }
  }

  li {
    padding-left: 1.5rem;
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.8;
    border-left: 2px solid ${props => props.theme.secondaryLight};
    :not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  a {
    color: ${props => props.theme.CTA};
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.8;
    transition: all ease 0.3s;
    :hover {
      color: ${props => props.theme.CTAHover};
    }
  }

  img {
    box-shadow: ${props => props.theme.bs};
    border-radius: 5px;
  }
`

export default class PostLayout extends Component {
  render() {
    const { markdownRemark, file } = this.props.data
    const { location } = this.props
    return (
      <>
        <Helmet
          title={markdownRemark.frontmatter.title}
          meta={[
            {
              name: 'description',
              content: `${markdownRemark.frontmatter.metaDescription}`,
            },
            {
              name: 'keywords',
              content: `${markdownRemark.frontmatter.keywords}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout
          location={location}
          headerText={markdownRemark.frontmatter.title}
        >
          <PostWrapper>
            <PersonContainer>
              <PostImg fluid={file.childImageSharp.fluid} />
              <ParagraphStyle>
                {markdownRemark.frontmatter.author}{' '}
                <span>{markdownRemark.frontmatter.authorDesc}</span>{' '}
                {markdownRemark.frontmatter.date}
              </ParagraphStyle>
            </PersonContainer>
            <PostContainer
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
          </PostWrapper>
          <BlogSection />
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        metaDescription
        keywords
        author
        authorDesc
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
    file(relativePath: { eq: "local-seo-web-expert.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 590) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
