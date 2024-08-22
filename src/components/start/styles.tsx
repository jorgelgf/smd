import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';



export const BoxRight = styled.div`

background-color: ${Themes.colors.primaryColor};
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: ${Themes.fontSize.xl};
font-weight: 1000;
color:${Themes.colors.whiteColor};
flex-direction: column;

@media(max-width:990px){
  border-radius:30px;
  padding-bottom:3rem ;
  max-height: 400px;
  .mission{
    width: 80%;
  }

  }

`;

export const ButtonWhats = styled.button`
color:${Themes.colors.primaryColor};
padding:1rem 2rem;
border: none;
font-size: clamp(${Themes.fontSize.md}, -1.5rem + 8vw, 1.5rem);
background-color: ${Themes.colors.whiteColor};
border-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap:5px;
font-weight: 800;
transition: ease-in-out .2s;

&:hover {
    filter: brightness(1.1);
    animation: slideY .3s ease-in-out;

        
        @keyframes slideY {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px); 
            }
            100% {
                transform: translateY(0);
            }
        }
  }
`;