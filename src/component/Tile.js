/**
 * Created by eroch on 04/05/2017.
 */
import React, { Component } from 'react';
import "../style/Tile.css";

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            picture: this.props.picture,
            face: this.props.face,
            owner: this.props.owner};
    }
    render() {
        return (
            <div className="Tile" id={this.state.id}></div>
        );
    }
}

export default Tile;