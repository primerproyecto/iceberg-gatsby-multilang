import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import TitlePage from '../components/TitlePage';
import LocalizedLink from '../components/LocalizedLink';
import useTranslations from '../components/useTranslations';
import BrandsStripe from '../components/BrandsStripe';


import * as S from '../components/ListWrapper/styled';


const Index = ({ data: { allMarkdownRemark, allInstaNode } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    subline,
    category,
    latestPosts,
    allPosts,
  } = useTranslations();

  const postList = allMarkdownRemark.edges;
  console.log(allInstaNode);


  return (
    <div className="homepage">
      <SEO title="Home" />
      <TitlePage text={hello} />
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <section>
      <h2>
        <strong>{latestPosts}</strong>
      </h2>
    
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
              <PostItem
                slug={`/blog/${slug}`}
                background={background}
                key={title}
                category={category}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
              />
            ),
        )}
      </S.ListWrapper>
      <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
      </section>          
      

      
      <section>
            <BrandsStripe></BrandsStripe>
      </section>
      <section className="instagramGrid">
            {allInstaNode.edges.map((imagen, index) => {
              return (
                <Img key={imagen.node.id} fluid={imagen.node.localFile.childImageSharp.fluid} alt='' />
              )
            })}
      </section>
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
    allInstaNode(limit: 8) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
