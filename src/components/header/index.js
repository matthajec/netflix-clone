import PropTypes from 'prop-types'
import {
  Background,
  Container,
  LogoLink,
  ButtonLink,
  Logo
} from './styles/header'

const Header = ({ dontShowOnSmallViewPort = false, bg = true, src, children, ...restProps }) => {
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

Header.propTypes = {
  dontShowOnSmallViewPort: PropTypes.bool,
  bg: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.any
}

Header.Frame.propTypes = {
  children: PropTypes.any.isRequired
}

Header.Logo.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Header.ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default Header