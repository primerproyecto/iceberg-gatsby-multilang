import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import * as S from './styled';

export default () => {
  const data = useStaticQuery(graphql`
    query FormQuery {
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
      <S.FormWrapper>
        <form name="contactPage" netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
         <p>
           <label>Name <input type="text" name="name" /></label>
         </p>
         <p>
           <label>Email <input type="email" name="email" /></label>
         </p>
         <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
         <div>
           <div data-netlify-recaptcha="true"></div>
         </div>
         
         <p>
           <button type="submit">Send</button>
         </p>
       </form>
        </S.FormWrapper>
    </div>
  )
}