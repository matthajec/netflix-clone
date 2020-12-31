import { Container } from './styles/footer'

const Footer = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)