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
        this.state = {name: this.props.name};
    }
    render() {
        const tiles = {
            Tile1: {
                'key': '1',
                "id": "Tile1",
                "picture": "",
                "face": "",
                "owner": "",
            }
            ,
            Tile2: {
                'key': '2',
                "id": "Tile2",
                "picture": "",
                "face": "",
                "owner": "",
            }
            ,
            Tile3: {
                'key': '3',
                "id": "Tile3",
                "picture": "",
                "face": "",
                "owner": "",
            }
            ,
            Tile4: {
                'key': '4',
                "id": "Tile4",
                "picture": "",
                "face": "",
                "owner": "",
            }
            ,
            Tile5: {
                'key': '5',
                "id": "Tile5",
                "picture": "",
                "face": "",
                "owner": "",
            }
        }
        const listItems = Object.keys(tiles).map((key) =>
            <Tile
                key={tiles[key].key}
                id={tiles[key].id}
                picture={tiles[key].picture}
                face={tiles[key].face}
                owner={tiles[key].owner}
             />
         );
        return (
            <div className="Memory">
                {listItems}
                <ControllerLaps />
                <ControllerPlayer />
            </div>
        );
    }
}

export default Memory;
