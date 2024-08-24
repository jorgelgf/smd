import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';

// Container que oculta o texto fora da área visível
export const ScrollingContainer = styled.div`
  width: 100%;
  overflow: hidden; /* Esconde o texto fora da área visível */
  white-space: nowrap; /* Impede que o texto quebre para a linha seguinte */
  padding:1rem;
  margin-top: 2rem;
  position: relative;
  background-color: ${Themes.colors.primaryColor};
  color:${Themes.colors.whiteColor};
  font-weight: 800;
  font-size: ${Themes.fontSize.xl};

`;

// Texto que será rolado
export const ScrollingText = styled.div`
  display: inline-flex;
  padding-left: 100%; /* Começa o texto fora da tela à direita */
  animation: scroll-left 95s linear infinite; /* Animação contínua com loop infinito */
  
  @keyframes scroll-left {
    0% {
      transform: translateX(-30%); /* Começa na posição inicial */
    }
    100% {
      transform: translateX(-50%); /* Move o texto completamente para fora da tela à esquerda */
    }
  }
`;