import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import Game from './component/Game';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Title name="memory"/>
                </div>
                    <Game name="memory"/>
            </div>
        );
    }
}

export default App;