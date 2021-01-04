import PropTypes from 'prop-types'
import {
  Background,
  Container,
  LogoLink,
  ButtonLink,
  Logo,
  Link,
  Group,
  Text,
  Feature,
  FeatureCallOut,
  PlayButton
} from './styles/header'

const Header = ({ dontShowOnSmallViewPort = false, bg = true, src, children, ...restProps }) => {
  return bg ? <Background src={src} dontShowOnSmallViewPort={dontShowOnSmallViewPort} bg={bg} {...restProps}>{children}</Background> : children
}

Header.Frame = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Header.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
)

Header.Logo = ({ to, src, alt, ...restProps }) => (
  <LogoLink to={to}>
    <Logo src={src} alt={alt} {...restProps} />
  </LogoLink>
)

Header.ButtonLink = ({ to, children, ...restProps }) => (
  <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
)

Header.Link = ({ active = false, children, ...restProps }) => (
  <Link active={active} {...restProps}>{children}</Link>
)

Header.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Header.Feature = ({ children, ...restProps }) => (
  <Feature {...restProps}>{children}</Feature>
)

Header.FeatureCallOut = ({ children, ...restProps }) => (
  <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
)

Header.PlayButton = ({ children, ...restProps }) => (
  <PlayButton {...restProps}>{children}</PlayButton>
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

Header.Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any.isRequired
}

export default Header