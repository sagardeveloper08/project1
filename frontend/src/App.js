import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login'
import Singup from './components/Auth/Singup'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path= "/singup" component={Singup}/>
        </Switch>
      </Router>
    </>
  )
}

export default App