import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          I will be the signin page
        </Route>
        <Route path="/signup">
          I will be the signup page
        </Route>
        <Route path="/browse">
          I will be the browse page
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          I will be the 404
        </Route>
      </Switch>
    </Router>
  )
}