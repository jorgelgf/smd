import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';



export const BoxRight = styled.div`

background-color: ${Themes.colors.primaryColor};
width: 100%;
display: flex;
height: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 1px 1px 10px 1px black;

transform: translateX(-20px);
animation: animeLeft 0.4s forwards;

    @keyframes animeLeft {
      to {
        opacity: 1;
        transform: initial;
    }
  }
  .mission{
    width: 40%;
    margin: 0;

}

@media(max-width:990px){
  border-radius:0;
  max-height: 400px;
  margin-top: 0;
  margin-bottom: 150px;
    
  .mission{
    width: 65%;
    padding-bottom:1.5rem; 
    padding-top: 1rem;
    
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

