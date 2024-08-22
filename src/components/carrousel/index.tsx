
import Carousel from 'react-material-ui-carousel';
import { imgCarousel } from '../../utils/imgCarousel';
import styled from 'styled-components';

export const XCarousel = () => {
    return <Carousel sx={{ width: '90%', maxWidth: '600px' }}>
        {imgCarousel.map((image) => {
            return <Image key={image.i} src={image.i} alt='imagem banner' />
        })}
    </Carousel>
}


const Image = styled.img`
width: 100%;
`;

