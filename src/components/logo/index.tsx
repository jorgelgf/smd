import styled from 'styled-components';
interface LogoProps {
    logo: string;
}

export const Logo = ({ logo }: LogoProps) => {
    return <Img src={logo} alt='imagem-logo-black' />
}
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

