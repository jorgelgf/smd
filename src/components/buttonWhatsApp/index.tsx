import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as S from "./styles";


export const ButtonWhatsApp = () => {
  return (
    <S.Container>
      <WhatsAppIcon style={{ fontSize: 'clamp(10px,8vw, 3rem)' }} />
    </S.Container>
  )
}

