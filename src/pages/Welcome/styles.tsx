import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';

export const Container = styled.div`
background-color: ${Themes.colors.primaryColor};
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const BoxLogo = styled.div`
opacity: 0; 
transition: opacity 1s ease-in-out; 
  &.show {
   opacity: 1;
  }
`;