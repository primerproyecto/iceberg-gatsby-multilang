import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useTranslations from '../useTranslations';

import * as S from './styled';

export default () => {
    const {
        contactForm_name,
        contactForm_email,
        contactForm_message,
        contactForm_send
      } = useTranslations();
  return (
      <S.FormWrapper>
        <form action="/success" name="contactPage" netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
         <p>
           <label>{contactForm_name}<input type="text" name="name" /></label>
         </p>
         <p>
           <label>{contactForm_email}<input type="email" name="email" /></label>
         </p>
         <p>
            <label>{contactForm_message}: <textarea name="message"></textarea></label>
        </p>
         <div>
           <div data-netlify-recaptcha="true"></div>
         </div>
         
         <p>
           <button type="submit">{contactForm_send}</button>
         </p>
       </form>
        </S.FormWrapper>
  )
}