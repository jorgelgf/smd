import styled from 'styled-components';
import bgfooter from '../../assets/foot.png';

export const Footer = styled.footer`
position: absolute; 
  left: 0;
  bottom: 0;
  width: 100%; 
  height: 40px;
  background-image: url(${bgfooter});
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
  @media(max-height:375px){
    position: fixed;
  }
  @media(max-width:675px){
    margin-top: 50px;
    position: relative;
  }
  
`;
