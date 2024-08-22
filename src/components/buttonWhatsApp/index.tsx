import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as S from "./styles";


export const ButtonWhatsApp = () => {
  const handleClick = () => {
    return alert("Calma que ainda vai funcionar :)")
  }
  return (
    <S.Container>
      <WhatsAppIcon onClick={handleClick} style={{ fontSize: 'clamp(10px,8vw, 3rem)' }} />
    </S.Container>
  )
}

