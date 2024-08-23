import styled from 'styled-components';
import { Themes } from '../../themes/globalStyles';

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction:column;
align-items: center;


`;


export const BoxLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
max-width: 400px;
padding-left: 3rem;
padding-right: 3rem;

.avatar{
  width: 600px;
  position: fixed;
  bottom:-150px;
  z-index: 2;

  
  @media(max-width:990px){
    max-width: 380px;
    position: relative;
    top:8px;
      }
  
  @media(max-height:600px){
    z-index: 0;
    
  }
}

@media(max-width:990px){
  justify-content: center;
  padding-left: 0rem;
  padding-right: 0rem;
  padding-top: 8rem;

}
@media(max-height:670px){
  justify-content: center;
  padding-left: 0rem;
  padding-right: 0rem;
  padding-top: 10rem;

}
`;

export const Midias = styled.div`

color:${Themes.colors.whiteColor}
`;





