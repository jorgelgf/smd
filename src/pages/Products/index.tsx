

import CustomImageList from '../../components/imagenList';
import logoB from '../../assets/logoB.png'
import * as S from './styles';
import { Typography } from '@mui/material';
import { Themes } from '../../themes/globalStyles';
import { Footer, Header, XCarousel } from '../../components';
export const Products = () => {
  return <>

    <S.Container>
      <Header />
      <img className='imgLogo' src={logoB} alt="imagem logo" />
      <Typography
        paddingTop={'3rem'}
        color={Themes.colors.grayColor}
        variant="h6">Materiais em nossas redes
      </Typography>
      <S.BoxImages>
        <S.BoxNet>
          <CustomImageList />
        </S.BoxNet>
      </S.BoxImages>
      <Typography
        marginBottom={2}
        paddingTop={'3rem'}
        color={Themes.colors.grayColor}
        variant="h6">Promoções
      </Typography>
      <S.BoxCarousel>
        <XCarousel />
      </S.BoxCarousel>
      <Footer />
    </S.Container>
  </>
}