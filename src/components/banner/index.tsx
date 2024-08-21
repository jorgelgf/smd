import { ReactNode } from 'react'
import { Container } from './styles'

interface BannerProps {
  children?: ReactNode;
}
const Banner = ({ children }: BannerProps) => {
  return (<>
    <Container>{children}</Container>
  </>
  )
}

export default Banner