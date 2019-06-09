import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js'
import Goods from './Goods/Goods'
import Employees from './Employees/Employees'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/employees-test" exact component={Employees} />
        <Route path="/goods-test" exact component={Goods} />
      </div>
    </Router>
  );
}

export default App;
