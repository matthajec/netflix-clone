import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Signin, Signup, Browse, PageNotFound } from './pages'
import * as ROUTES from './constants/routes'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export function App() {
  const user = useAuthListener()

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}