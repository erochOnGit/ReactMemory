function Memory(tabTiles){
    this.tabTiles=tabTiles;
    this.tabTilesObject = [];
    this.tabTilesOwned = [];
    this.currentPlayer="player1";
    for(var i =0;i<this.tabTiles.length;i++) {
        let tabObject = this.tabTilesObject;
        let tabOwned = this.tabTilesOwned;
        let jeu = this;
        this.tabTilesObject.push({
            name:this.tabTiles[i],
            state:"dead",
            owned:function(){
                for(var i = 0; i<tabObject.length;i++) {
                    this.owner = jeu.currentPlayer;
                    if (tabObject[i].name==this.name) {
                        tabOwned.push(this);
                        var index = tabObject.indexOf(this);
                        tabObject.splice(index,1);
                        break;
                    }
                }
            },
            flip:function(){
                let foundTile = false;
                for(var i = 0; i<tabObject.length;i++){
                    if(tabObject[i].state=="alive"&&this!=tabObject[i]) {
                        if (tabObject[i].name != this.name) {
                            tabObject[i].state = "dead";
                            this.state = "dead"
                            foundTile = true;
                        }
                        else {
                            tabObject[i].owned();
                            this.owned();
                            foundTile = true;
                        }
                        if (foundTile) {
                            if(jeu.currentPlayer=="player1"){
                                jeu.currentPlayer="player2"
                            }else{
                                jeu.currentPlayer="player1"
                            }
                            break;
                        }

                    }else{
                        this.state="alive"
                    }
                }
            },
            getOwner:function() {
                if (this.owner != undefined) {
                    return this.owner
                }else{
                    return "not yet owned"
                }
            }
        })
    }
}

Memory.prototype.display=function(){
    return this.tabTilesObject
};

Memory.prototype.getCurrentPlayer=function(){
    return this.currentPlayer
};

test('shouldHave 4 tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    expect(jeu.display().length).toEqual(4)
});

test('Tile should be dead',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    expect(jeu.display()[0].state).toEqual("dead")

});

test('state should be alive when flipped once',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    expect(jeu.display()[0].state).toEqual("alive")

});

test('state should be alive when flipped twice',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[0].flip();
    expect(jeu.display()[0].state).toEqual("alive")

});

test('state should be dead when I flipped two different tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[1].flip();
    expect(jeu.display()[0].state).toEqual("dead")

});

test('should have 2 tiles left when I flipped two same tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[2].flip();
    expect(jeu.display().length).toEqual(2)
});

test('get current player',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    expect(jeu.getCurrentPlayer()).toEqual("player1")
});

test('could get the owner after removing an even',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[2].flip();
    expect(jeu.tabTilesOwned[0].getOwner()).toEqual('player1')
});

test('get current player after removing an even',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[2].flip();
    expect(jeu.getCurrentPlayer()).toEqual("player2")
});

test('could get the owner after removing two even',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil']);
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[2].flip();
    expect(jeu.tabTilesOwned[0].getOwner()).toEqual('player1')
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[1].flip();
    expect(jeu.tabTilesOwned[2].getOwner()).toEqual('player2')
});