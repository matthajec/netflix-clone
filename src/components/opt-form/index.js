import {
  Container,
  Input,
  Button,
  Text,
  InputContainer,
  InputLabel
} from './styles/opt-form';

const OptForm = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

OptForm.Input = ({ placeholder, ...restProps }) => (
  <InputContainer {...restProps}>
    <Input required={true} />
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

export default OptForm