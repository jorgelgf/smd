import styled from 'styled-components';

export const Container = styled.div`
background-color:white;
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.imgLogo{
  padding-top:2rem;
  @media(max-width:990px){
  width: 300px;
}
}`;