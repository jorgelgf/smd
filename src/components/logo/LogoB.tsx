import React from 'react';
import logo from '../../assets/logoB.png';
import styled from 'styled-components';

const LogoB = () => {
    return <Img src={logo} alt='imagem-logo-black' />
}

export default LogoB;
const Img = styled.img`

width: 300px;
margin-bottom: 300px;
@media(max-width:990px){
    margin-bottom: 0;

}

animation: slide 3s ease-in-out infinite;
        
        @keyframes slide {
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
            

`;

