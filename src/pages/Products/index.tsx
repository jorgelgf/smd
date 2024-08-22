

import CustomImageList from '../../components/imagenList';
import logoB from '../../assets/logoB.png'
import * as S from './styles';
import { Typography } from '@mui/material';
import { Themes } from '../../themes/globalStyles';
import { XCarousel } from '../../components';
export const Products = () => {
  return <>
    <S.Container>
      <img className='imgLogo' src={logoB} alt="imagem logo" />

      <Typography
        paddingTop={'2rem'}

        color={Themes.colors.grayColor} variant="h6">Materiais em nossas redes</Typography>
      <S.BoxImages>
        <S.BoxNet>
          <CustomImageList />
        </S.BoxNet>
      </S.BoxImages>
      <Typography paddingTop={'2rem'} color={Themes.colors.grayColor} variant="h6">Banners</Typography>
      <XCarousel />


    </S.Container>

  </>
}