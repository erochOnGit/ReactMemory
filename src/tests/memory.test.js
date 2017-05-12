function Memory(tabTiles){
    this.tabTiles=tabTiles;
    this.tabTilesObject = [];
    this.tabTilesOwned = [];
    for(var i =0;i<this.tabTiles.length;i++) {
        let tabObject = this.tabTilesObject;
        let tabOwned = this.tabTilesOwned;
        let jeu = this;
        this.tabTilesObject.push({
            name:this.tabTiles[i],
            state:"dead",
            owned:function(){
                for(var i = 0; i<tabObject.length;i++) {
                    tabOwned.push(this)
                    if (tabObject[i].name==this.name) {
                        var index = tabObject.indexOf(this);
                        tabObject.splice(index,1)
                        break;
                    }
                }
            },
            flip:function(){
                for(var i = 0; i<tabObject.length;i++){
                    if(tabObject[i].state=="alive"&&this!=tabObject[i]){
                        if(tabObject[i].name!=this.name){
                            tabObject[i].state="dead"
                            this.state="dead"
                        }
                        else{
                            tabObject[i].owned();
                            this.owned();
                        }
                    }else{
                        this.state="alive"
                    }
                }
            }
        })
    }
}

Memory.prototype.display=function(){
    return this.tabTilesObject
}

test('shouldHave 4 tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    expect(jeu.display().length).toEqual(4)
})

test('Tile should be dead',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    expect(jeu.display()[0].state).toEqual("dead")

})

test('state should be alive when flipped once',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    jeu.tabTilesObject[0].flip();
    expect(jeu.display()[0].state).toEqual("alive")

})

test('state should be alive when flipped twice',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[0].flip();
    expect(jeu.display()[0].state).toEqual("alive")

})

test('state should be dead when I flipped two different tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[1].flip();
    expect(jeu.display()[0].state).toEqual("dead")

})

test('should have 2 tiles left when I flipped two same tiles',function(){
    let jeu = new Memory(['lune','soleil','lune','soleil'])
    jeu.tabTilesObject[0].flip();
    jeu.tabTilesObject[2].flip();
    expect(jeu.display().length).toEqual(2)
})
