import PropTypes from 'prop-types'
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit
} from './styles/form'

const Form = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Form.Base = ({ children, ...restProps }) => (
  <Base {...restProps}>{children}</Base>
)

Form.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Form.TextSmall = ({ children, ...restProps }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
)

Form.Link = ({ to, children, ...restProps }) => (
  <Link to={to} {...restProps}>{children}</Link>
)

Form.Error = ({ children, ...restProps }) => (
  <Error {...restProps}>{children}</Error>
)

Form.Input = ({ type = "text", ...restProps }) => (
  <Input type={type} {...restProps} />
)

Form.Sumbit = ({ children, ...restProps }) => (
  <Submit {...restProps}>{children}</Submit>
)




export default Form