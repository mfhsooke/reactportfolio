import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
  return (
    <>
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact}/>
            </Switch>
            </Router>
    </>
  );
}

export default App;
