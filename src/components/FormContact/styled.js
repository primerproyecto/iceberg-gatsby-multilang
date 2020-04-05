import styled from 'styled-components';
import media from 'styled-media-query';


export const FormWrapper = styled.fieldset`
.form-name {
    grid-column: 1;
    grid-row: 1 ;
}
.form-email {
    grid-column: 1;
    grid-row: 2 / 3;
    ${media.greaterThan('medium')`
    grid-row: 1;
    grid-column: 2 / 3;
    `}

}
.form-message {
    grid-column: 1;
    grid-row: 3 / 4;
    ${media.greaterThan('medium')`
    grid-row: 2;
    grid-column: 1 / 3;
    `}
    
}
.form-boton {
    grid-column: 1;
    grid-row: 4 / 5;
    ${media.greaterThan('medium')`
        grid-row: 3;
        grid-column: 1 / 3;
        text-align: center;
    `}
}
`;
export const FormWrapperForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--space);
    ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.greaterThan('large')`padding: calc(var(--space)*1.3) var(--space-sm);
    `}
`;

export const FormWrapperItems = styled.div`

`;

