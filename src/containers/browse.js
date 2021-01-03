import { useState } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import SelectProfileContainer from './profiles'
import FooterContainer from './footer'

export default function BrowseContainer() {
  const [profile, setProfile] = useState({})

  const user = {
    displayName: "Karl",
    photoURL: "1"
  }

  return profile.displayName ? (
    <>
      <h1>Hello</h1>
      <FooterContainer />
    </>
  ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}