import React from 'react';

import * as S from './styled';

const Languages = () => {
  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to="/" hrefLang="en">
          en-US
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/da" hrefLang="da">
          pt-BR
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/es" hrefLang="es">
          es-ES
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
  );
};

export default Languages;
