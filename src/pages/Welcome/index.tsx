import { useEffect, useState } from 'react';
import * as S from './styles';
import { Logo } from '../../components';
import logoW from '../../assets/logoW.png';
import { useNavigate } from 'react-router-dom';
export const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {

    const timer = () => {

      setTimeout(() => {
        navigate('/home')
      }, 4000);
    }
    timer();
    setIsVisible(true);

  }, [navigate])
  return (
    <S.Container>
      <S.BoxLogo className={isVisible ? 'show' : ''}>
        <Logo logo={logoW} />
      </S.BoxLogo >
    </S.Container>
  )
}

