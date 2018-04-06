import React from 'react';
import logo from '../images/galaxy1.png';
import './App.css';



function Header(props) {
    return (
        <header className="App-header">
        <img src={logo} className="image App-logo" width="80px" alt="Sun Storm 2012"/>
          <h1 className="App-title">{props.taco}</h1>
        </header>
    )

}

export default Header;