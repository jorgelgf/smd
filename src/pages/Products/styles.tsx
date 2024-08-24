import styled from "@emotion/styled";
import { Themes } from '../../themes/globalStyles';

export const Container = styled.div`
background-color:white;
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 2rem;

transform: translateX(-20px);
animation: animeLeft 0.4s forwards;

    @keyframes animeLeft {
      to {
        opacity: 1;
        transform: initial;
    }
  }

.imgLogo{
  padding-top:5rem;
  @media(max-width:990px){
  width: 300px;
}
}
`;

export const BoxImages = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media(max-width:990px){
  margin-top: 1rem;
  width: 90%;
  border-radius: 15px;
  }
`;
export const BoxNet = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
padding-left:1rem;
padding-right: 1rem;
`;

export const BoxCarousel = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 4rem;
`;
