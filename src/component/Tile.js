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
            owner: this.props.owner,
            flipBack: this.props.flipBack};
    }
    componentWillUpdate(nextProps){}
    render() {
        var myTile = this;
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

function getface() {
    return myTile.state.face;
}
        //click gestion


            function handleClick(e) {
                myTile.setState((face, props) => ({
                    face: !myTile.state.face
                }));
                if(myTile.state.face){
                    display= images[myTile.props.picture]
                }else {
                    display = images["dos.jpg"]
                }
                myTile.props.myFunc(!myTile.state.face,myTile.state.id);
            }

            // turn gestion
                if(this.props.flipBack){
                    myTile.setState((face, props) => ({
                        face: false
                    }));
                    display = images["dos.jpg"]
                }

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
