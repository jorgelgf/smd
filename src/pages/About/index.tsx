import { Box, Container, Typography } from '@mui/material';
import logoB from '../../assets/logoB.png';
import * as S from './styles';
import { Footer } from '../../components';
import avatar from '../../assets/avatar.png';

export const About = () => {
  const me = `Olá! Sou designer criativo, especializado em transformar ideias em visuais impactantes. Com uma abordagem inovadora, ajudo a criar soluções de design que capturam a essência do seu projeto e se destacam no mercado. Vamos conversar sobre como posso dar vida às suas ideias!`;

  const infoServices = 'DESIGNER CRIATIVO * LOGOS * BANNERS * FLYERS * ESTAMPA * PERSONALIZAÇÃO * CRIAÇÃO * IMAGEM * DESIGNER * DESIGNER CRIATIVO * LOGOS BANNERS * FLYERS * ESTAMPA * PERSONALIZAÇÃO * CRIAÇÃO * IMAGEM * DESIGNER * DESIGNER CRIATIVO * LOGOS BANNERS * FLYERS * ESTAMPA * PERSONALIZAÇÃO * CRIAÇÃO * IMAGEM * DESIGNER * DESIGNER CRIATIVO * LOGOS BANNERS * FLYERS * ESTAMPA * PERSONALIZAÇÃO * CRIAÇÃO * IMAGEM * DESIGNER *'
  return (<>
    <Container>
      <Box
        marginTop={5}
        marginBottom={10}
        paddingTop={4}
        textAlign={'center'}>
        <img width='300px' src={logoB} alt='logo' />
      </Box>
      <Box padding={0} >
        <Typography marginTop={5} maxWidth={600}>{me}</Typography>
      </Box>
      <img src={avatar} alt='avatar' />
    </Container >
    <S.ScrollingContainer>
      <S.ScrollingText>
        {infoServices}
      </S.ScrollingText>
    </S.ScrollingContainer>
    <Footer />
  </>)
}