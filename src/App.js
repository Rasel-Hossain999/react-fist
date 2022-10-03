import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/'>
              <HomeScreen></HomeScreen>
            </Route>
          </Container>
        </main>
      <Footer/>
    </Router>
  )
}

export default App
