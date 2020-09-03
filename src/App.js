import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import About from './Components/About/About';
import Layout from './Components/Layout';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
      </header>
      <section className='App-content'>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/pricing' exact component={Pricing} />
            <Route path='/about' exact component={About} />
            <Route path='/privacy-policy' exact component={PrivacyPolicy} />
            {/* <Route path='/register' exact component={} />
            <Route path='/register/terms' exact component={} />
            <Route path='/demo' exact component={} />
            <Route path='/students' exact component={} />
            <Route path='/student/:id' exact component={} />
            <Route path='/teachers' exact component={} />
            <Route path='/teacher/:id' exact component={} />
            <Route path='/classes' exact component={} />
            <Route path='/class/:id' exact component={} />
            <Route path='/new' exact component={} />
            <Route path='/new/user' exact component={} />
            <Route path='/new/class' exact component={} />
            <Route path='/account' exact component={} />
            <Route path='/account/license' exact component={} /> */}
          </Switch>
        </Router>
      </section>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
