import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as S from "./styles";
import React from 'react';


const ButtonWhatsApp = () => {
  return (
    <S.Container>
      <WhatsAppIcon style={{ fontSize: 'clamp(10px,8vw, 3rem)' }} />
    </S.Container>
  )
}

export default ButtonWhatsApp;