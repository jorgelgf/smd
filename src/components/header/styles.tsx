import styled from '@emotion/styled';

export const ButtonX = styled.div`
cursor: pointer;
padding: .5rem 1rem;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
border: none;
gap:5px;
background-color: #0fb60f;
color: white;
font-weight: 600;
transition: ease-in-out .2s;
z-index: 2;

&:hover {
    filter: brightness(1.1);
  }
`;

export const ImgLogoSand = styled.img`
width:200px;
cursor: pointer;
`;
