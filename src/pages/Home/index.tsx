
import { Banner, Footer, Loading, Logo } from '../../components';
import { Suspense, lazy } from 'react';
import * as S from './styles';
import logoB from '../../assets/logoB.png';
import avatar from '../../assets/avatar.png';

export const Home = () => {
  const Start = lazy(() => import("../../components/start"));

  return (
    <>
      <S.Container>
        <Suspense fallback={<Loading />}>
          <Banner >
            <S.BoxLeft>
              <S.BoxLogo>
                <Logo logo={logoB} />
              </S.BoxLogo>
              <img className='avatar' src={avatar} alt='avatar' />
            </S.BoxLeft>
            {<Start />}
          </Banner>
        </Suspense>
        <Footer />
      </S.Container >
    </>
  )
}

