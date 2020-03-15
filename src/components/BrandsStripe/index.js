import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import * as S from './styled';

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allFile(filter: {relativeDirectory: {eq: "brands"}}){
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <S.BrandsStripeWrapper>
        {data.allFile.edges.map( brand => {
         return <S.BrandsStripeWrapperItems key={brand.node.id}><Img fluid={brand.node.childImageSharp.fluid} alt='' /></S.BrandsStripeWrapperItems>
        }) }
        </S.BrandsStripeWrapper>
    </div>
  )
}