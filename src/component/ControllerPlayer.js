/**
 * Created by eroch on 03/05/2017.
 */
import React, { Component } from 'react';
import Tile from './Tile'
class ControllerPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlayer:this.props.activePlayer,
            activeTileID:this.props.activeTileID,
            activeTileFace:this.props.activeTileFace,
            turn:0,
        }
    }
    componentDidMount() {
        // if (isOdd(this.props.turn)){
        //     console.log(this.props.activePlayer)
        //
        //     this.props.setCard("card1",this.props.activePlayer);
        //
        // }else if(!0){
        //     console.log(this.props.activePlayer)
        //     this.props.setCard("card2",this.props.activePlayer);
        // }
    }
    componentWillUpdate(nextProps){
        if (this.isOdd(this.props.turn)){
            console.log('willupdate odd'+this.props.activePlayer)

            nextProps.setCard("card1",this.props.activePlayer);

        }else if(!0){
            console.log('willupdate even'+this.props.activePlayer)
            nextProps.setCard("card2",this.props.activePlayer);
        }
    }

     isEven(n) {
    return n % 2 == 0;
}

     isOdd(n) {
    return Math.abs(n % 2) == 1;
}
    render() {

        // let localTurnValue = this.state.turn;
        // function isEven(n) {
        //     return n % 2 == 0;
        // }
        //
        // function isOdd(n) {
        //     return Math.abs(n % 2) == 1;
        // }
        //
        // console.log(this.props.turn)
        // if(localTurnValue!=this.props.turn){
        //     this.setState({
        //         turn:this.props.turn
        //     })
        //
        //     if (isOdd(this.props.turn)){
        //         console.log(this.props.activePlayer)
        //
        //         this.props.setCard("card1",this.props.activePlayer);
        //
        //     }else if(!0){
        //         console.log(this.props.activePlayer)
        //         this.props.setCard("card2",this.props.activePlayer);
        //     }

        // }

        let This = this;
        function mafct(){
            console.log('controllerplayer : '+This.props.activePlayer )
        }

        return (
            <div className="ControllerPlayer" onClick={mafct}>Axou</div>
        );
    }
}

export default ControllerPlayer;