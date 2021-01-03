import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Signin, Signup, Browse, PageNotFound } from './pages'
import * as ROUTES from './constants/routes'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}