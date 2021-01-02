import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, PageNotFound } from './pages'
import * as ROUTES from './constants/routes'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          I will be the signin page
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          I will be the signup page
        </Route>
        <Route path={ROUTES.BROWSE}>
          I will be the browse page
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