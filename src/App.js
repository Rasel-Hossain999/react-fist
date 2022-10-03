import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header'
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
          <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
          </Routes>        
          </Container>
        </main>
    </BrowserRouter>
  )
}

export default App
