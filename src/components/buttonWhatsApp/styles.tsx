import styled from 'styled-components';

export const Container = styled.button`
background-color: #0fb60f;
position: fixed;
cursor: pointer;
bottom:5rem;
width:clamp(20px, 8vh, 100px);
height: clamp(20px, 8vh, 100px);
right: 1%;
color:white;
border:none;
padding:1rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
opacity: .7;
:hover{
  opacity: 1;
}
`;