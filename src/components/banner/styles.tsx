import styled from '@emotion/styled';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;


@media(max-width:990px){
  flex-direction: column;
  width: auto;
}
`;
