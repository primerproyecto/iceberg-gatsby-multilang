import React from 'react';
import { graphql } from 'gatsby';
import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';
import BrandSprite from '../components/BrandsStripe';

import * as S from '../components/Content/styled';

const Page = props => {
  const post = props.data.markdownRemark;
  console.log(post);
  const isContact = post.frontmatter.title == 'Contact' || post.frontmatter.title == 'Contacto' ? true : false;
  
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <TitlePage text={post.frontmatter.title} />
      <S.Content>
      <form name="contact" netlify="true">
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <div>
      { isContact ? `<BrandSprite />` : `<div>aqui va el formulario</div>`}
      </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }}>
        
        
        </div>
      </S.Content>
    </>
  );
};

export const query = graphql`
  query Page($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`;

export default Page;
