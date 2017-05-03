/**
 * Created by emile on 02/05/2017.
 */
import React, { Component } from 'react';

 class Title extends Component {
    constructor(props) {
        super(props);
        if(props.name) {
            this.state = {name: props.name};
        }else{
            this.state = {name: "Game"};

        }
    }
    render() {
        return (
                <h1>{this.state.name}</h1>
        );
    }
}
export default Title;

