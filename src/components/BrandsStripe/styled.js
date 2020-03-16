import styled from 'styled-components';
import media from 'styled-media-query';


export const BrandsStripeWrapper = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: auto;
`;

export const BrandsStripeWrapperItems = styled.li`
    width: 100%;
    & + li {
      margin-left: 4px;
    }
`;