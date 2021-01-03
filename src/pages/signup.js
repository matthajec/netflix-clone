import { useState } from 'react'
import { Form } from "../components";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import * as ROUTES from '../constants/routes'

export default function Signup() {
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const isInvalid = firstName || password === '' || emailAddress === ''


  const handleSignUp = (e) => {
    e.preventDefault()

    // call to firebase and auth
    // if error populate the error
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              aria-label="first name"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
            <Form.Sumbit disabled={isInvalid}>Sign Up</Form.Sumbit>
          </Form.Base>

          <Form.Text>Already watching? <Form.Link to={ROUTES.SIGN_IN}>Sign In now</Form.Link></Form.Text>
          <Form.TextSmall>This page is (not) protected by Google reCAPTCHA.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}