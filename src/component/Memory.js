/**
 * Created by emile on 02/05/2017.
 */
import React, { Component } from 'react';
import ControllerLaps from './ControllerLaps'
import ControllerPlayer from './ControllerPlayer'
class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name};
    }
    render() {
        return (
            <div className="Memory">

                <ControllerLaps />
                <ControllerPlayer />
            </div>
        );
    }
}

export default Memory;
