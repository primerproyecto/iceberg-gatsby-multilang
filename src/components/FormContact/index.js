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
        <S.FormWrapperForm action="/success" name="contactPage" netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
          <S.FormWrapperItems className="form-name">
            <label>{contactForm_name}<input type="text" name="name" /></label>
          </S.FormWrapperItems>
          <S.FormWrapperItems className="form-email">
            <label>{contactForm_email}<input type="email" name="email" /></label>
          </S.FormWrapperItems>
          <S.FormWrapperItems className="form-message">
            <label>{contactForm_message}: <textarea name="message"></textarea></label>
            </S.FormWrapperItems>
          <S.FormWrapperItems>
            <div data-netlify-recaptcha="true"></div>
            </S.FormWrapperItems>
          <S.FormWrapperItems className="form-boton">
           <button type="submit">{contactForm_send}</button>
          </S.FormWrapperItems>
        </S.FormWrapperForm>
      </S.FormWrapper>
  )
}