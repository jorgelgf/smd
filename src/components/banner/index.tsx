import { ReactNode } from 'react'
import { Container } from './styles'

interface BannerProps {
  children?: ReactNode;
}
export const Banner = ({ children }: BannerProps) => {
  return (<>
    <Container>{children}</Container>
  </>
  )
};