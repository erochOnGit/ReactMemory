/**
 * Created by emile on 02/05/2017.
 */
import React, {Component} from "react";
import ControllerLaps from "./ControllerLaps";
import ControllerPlayer from "./ControllerPlayer";
import Tile from "./Tile";
import "../style/Memory.css";


class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            turn:0,
            activePlayer:"player1",
            activeTileFace:false,
            activeTileID:"",
            activeTilePicture:"",
            flipBack:false
        };
        this.handleClick = this.handleClick.bind(this);
        this.setCard = this.setCard.bind(this);
        this.flipBackFalse = this.flipBackFalse.bind(this);

    }

    render() {

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => {
                images[item.replace('./', '')] = r(item);
            });
            return images;
        }

        const images = importAll(require.context('../static/img/cards/', false, /\.(png|jpe?g|svg)$/));

        const tiles = {
            Tile1: {
                'key': '1',
                "id": "Tile1",
                "picture": "lune.jpg",
                "face": this.state.activeTileFace,
                "owner": "",
            }
            ,
            Tile2: {
                'key': '2',
                "id": "Tile2",
                "picture": "lune.jpg",
                "face": this.state.activeTileFace,
                "owner": "",
            }
            ,
            Tile3: {
                'key': '3',
                "id": "Tile3",
                "picture": "oeuf.png",
                "face": this.state.activeTileFace,
                "owner": "",
            }
            ,
            Tile4: {
                'key': '4',
                "id": "Tile4",
                "picture": "eye.jpg",
                "face": this.state.activeTileFace,
                "owner": "",
            }
            ,
            Tile5: {
                'key': '5',
                "id": "Tile5",
                "picture": "pomme.jpg",
                "face": this.state.activeTileFace,
                "owner": "",
            }
            ,
            Tile6: {
                'key': '6',
                "id": "Tile6",
                "picture": "paysage.jpg",
                "face": this.state.activeTileFace,
                "owner": "",
            }
        };
        const listItems = Object.keys(tiles).map((key) =>
            <Tile
                key={tiles[key].key}
                id={tiles[key].id}
                picture={tiles[key].picture}
                face={tiles[key].face}
                owner={tiles[key].owner}
                myFunc={this.handleClick}
                flipBack = {this.state.flipBack}
                flipBackFalse = {this.flipBackFalse}/>

        );
        return (
            <div className="Memory">
                {listItems}
                <ControllerLaps
                    tileList={listItems}
                />
                <ControllerPlayer
                    tileList={listItems}
                    activePlayer={this.state.activePlayer}
                    activeTileID={this.state.activeTileID}
                    activeTilePicture={this.state.activeTilePicture}
                    activeTileFace={this.state.activeTileFace}
                    turn={this.state.turn}
                    setCard={this.setCard}
                />
            </div>
        );
    }

    handleClick(face,id,picture) {
        this.setState({
            activeTileFace: face,
            activeTileID:id,
            activeTilePicture:picture,
            turn:this.state.turn+1
        });

        console.log('flipback'+this.state.flipBack);
        console.log('turn : '+ this.state.turn);
        console.log('face : '+ face);
        console.log('id : '+id);
        console.log('picture : '+picture);
    }

    flipBackFalse() {
        this.setState({
            flipBack: false,
        });

        console.log('flipback'+this.state.flipBack);
        console.log('-------------------*******flipback*****--------------------')
    }

    setCard(card,player){
        console.log('player : '+player+'')
        console.log('card : '+card+'')
        if(card=="card1"){

        }else if(card=="card2"){

            if(player=="player1") {
                this.setState({
                    activePlayer:"player2",
                    flipBack:true
                });
            }else{
                this.setState({
                    activePlayer:"player1",
                    flipBack:true
                });
            }
        }
    }
}

export default Memory;