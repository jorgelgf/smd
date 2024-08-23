import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';



export const BoxRight = styled.div`

background-color: ${Themes.colors.primaryColor};
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 3rem;
border-radius: 25px 0 0 25px;
box-shadow: 1px 1px 10px 1px black;
  .mission{
    width: 78%;
    margin: 0;
    padding:0; 
}

@media(max-width:990px){
  border-radius:0;
  padding-bottom:4rem ;
  max-height: 400px;
  margin-bottom: 10rem;

  .mission{
    margin-top: 2rem;
    width: 75%;
    
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

