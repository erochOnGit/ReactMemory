/**
 * Created by emile on 02/05/2017.
 */

import React, { Component } from 'react';
import Memory from './Memory';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name};

/** faire une liste de if pour lancer les differents jeux*/

    }
    render() {
        return (
            <div className="game-container">
                <Memory/>
            </div>
        );
    }
}

export default Game;
