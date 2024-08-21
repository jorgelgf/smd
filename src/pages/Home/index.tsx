import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Banner, Footer, Header, LogoB } from '../../components';
import * as S from './styles';
import avatar from '../../assets/avatar.png';
import { Container } from '@mui/material';
const Home = () => {


  return (
    <>
      <Header />
      <S.Container>

        <Banner >
          <S.BoxLeft>
            <LogoB />
            <img className='avatar' src={avatar} alt='avatar' />
          </S.BoxLeft>
          <S.BoxRight>
            <S.Midias>
            </S.Midias>
          </S.BoxRight>
        </Banner>
        <Footer />

      </S.Container>
    </>
  )
}

export default Home;