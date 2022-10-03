import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path='/'>
        <HomeScreen></HomeScreen>
      </Route>
    </Router>
  )
}

export default App
