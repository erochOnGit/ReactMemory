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
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        const images = importAll(require.context('../static/img/cards/', false, /\.(png|jpe?g|svg)$/));

        const tiles = {
            Tile1: {
                'key': '1',
                "id": "Tile1",
                "picture": "lune.jpg",
                "face": true,
                "owner": "",
            }
            ,
            Tile2: {
                'key': '2',
                "id": "Tile2",
                "picture": "arrows.jpg",
                "face": false,
                "owner": "",
            }
            ,
            Tile3: {
                'key': '3',
                "id": "Tile3",
                "picture": "oeuf.png",
                "face": false,
                "owner": "",
            }
            ,
            Tile4: {
                'key': '4',
                "id": "Tile4",
                "picture": "eye.jpg",
                "face": false,
                "owner": "",
            }
            ,
            Tile5: {
                'key': '5',
                "id": "Tile5",
                "picture": "pomme.jpg",
                "face": false,
                "owner": "",
            }
            ,
            Tile6: {
                'key': '6',
                "id": "Tile6",
                "picture": "paysage.jpg",
                "face": false,
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
             />
         );
        return (
            <div className="Memory">
                {listItems}
                <ControllerLaps
                    tileList={listItems}
                />
                <ControllerPlayer />
            </div>
        );
    }
}

export default Memory;