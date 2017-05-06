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

        //image gestion

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const images = importAll(require.context('../static/img/cards/', false, /\.(png|jpe?g|svg)$/));
        let display;
        if(this.state.face){
            display= images[this.props.picture]
        }else {
            display = images["dos.jpg"]
        }


        //click gestion


            // function handleClick(e) {
            //     e.stopPropagation()
            //     e.preventDefault()
            //     this.setState((face, props) => ({
            //         face: !this.state.face
            //     }));
            //     if(this.state.face){
            //         display= images[this.props.picture]
            //     }else {
            //         display = images["dos.jpg"]
            //     }
            // }

        return (
            <div className="Tile" id={this.state.id} onClick={handleClick}>
                <img
                     draggable="false"
                     src={display}
                     className="tilePicture"
                     alt={this.props.id}
                />
            </div>
        );
    }
}
export default Tile;