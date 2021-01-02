import PropTypes from 'prop-types'
import {
  Container,
  Input,
  Button,
  Text,
  InputContainer,
  InputLabel,
  Break
} from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

OptForm.Input = ({ placeholder, ...restProps }) => (
  <InputContainer >
    <Input required={true} {...restProps} />
    <InputLabel>{placeholder}</InputLabel>
  </InputContainer>
)

OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
)

OptForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

OptForm.Break = ({ ...restProps }) => (
  <Break {...restProps} />
)

OptForm.propTypes = {
  children: PropTypes.any.isRequired
}

OptForm.Input.propTypes = {
  placeholder: PropTypes.string
}

OptForm.Button.propTypes = {
  children: PropTypes.any
}

OptForm.Text.propTypes = {
  children: PropTypes.string.isRequired
}

export default OptForm