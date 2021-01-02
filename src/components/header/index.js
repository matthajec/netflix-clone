import {
  Background,
  Container,
  LogoLink,
  ButtonLink,
  Logo
} from './styles/header'

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = ({ children, ...restProps }) => (
  <Container>{children}</Container>
)

Header.Logo = ({ to, src, alt, ...restProps }) => (
  <LogoLink to={to}>
    <Logo src={src} alt={alt} {...restProps} />
  </LogoLink>
)

Header.ButtonLink = ({ to, children }) => (
  <ButtonLink to={to}>{children}</ButtonLink>
)

export default Header