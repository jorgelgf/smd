import { Logo } from '../../components'
import logoB from '../../assets/logoB.png'
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => navigate('/home')}>
      <Logo logo={logoB} />
      Ainda estamos construindo... [click para voltar]
    </S.Container>)
}

