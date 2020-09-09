import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import About from './Components/About/About';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Student from './Components/Students/Student';
import Students from './Components/Students/Students';

function App() {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <Nav />
        </header>
        <section className='App-content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/pricing' exact component={Pricing} />
            <Route path='/about' exact component={About} />
            <Route path='/privacy-policy' exact component={PrivacyPolicy} />
            <Route path='/students' exact component={Students} />
            <Route path='/student' exact component={Student} />
            {/* 
            <Route path='/demo' exact component={} />
            <Route path='/teachers' exact component={} />
            <Route path='/teacher/:id' exact component={} />
            <Route path='/classes' exact component={} />
            <Route path='/class/:id' exact component={} />
            <Route path='/new/user' exact component={} />
            <Route path='/new/class' exact component={} />
            <Route path='/account' exact component={} />
            <Route path='/account/license' exact component={} /> */}
          </Switch>
        </section>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
