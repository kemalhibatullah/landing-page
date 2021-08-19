import React from 'react'
import Header from './Components/Header';
import { BrowserRouter as Router} from 'react-router-dom'
import Hero from './Components/Hero';
import Download from './Components/Download';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Hero/>
      <Download/>
      <Form/>
      <Footer/>
    </Router>
  );
}

export default App;
