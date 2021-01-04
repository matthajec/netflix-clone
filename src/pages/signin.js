import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase';


export default function Signin() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [error, setError] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const isInvalid = password === '' || emailAddress === ''

  const handleSignIn = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        setEmailAddress('')
        setPassword('')
        setError('')
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => setError(error.message))
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              aria-label="email address"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              aria-label="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="off"
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>

          <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign Up now</Form.Link></Form.Text>
          <Form.TextSmall>This page is (not) protected by Google reCAPTCHA.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}