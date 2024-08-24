import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as S from "./styles";


export const ButtonWhatsApp = () => {

  const info = 'Olá! Gostaria de fazer um orçamento contigo.'
  return (
    <S.Link href={`https://wa.me/558496341546?text=${info}`}>
      <WhatsAppIcon style={{ fontSize: 'clamp(10px,8vw, 3rem)' }} />
    </S.Link>

  )
}

