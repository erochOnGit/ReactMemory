function Memory(tabTiles){
  this.tabTiles=tabTiles;
  this.tabTilesObject = [];

  for(var i =0;i<this.tabTiles.length;i++) {
    this.tabTilesObject.push({
      name:this.tabTiles[i],
      state:"dead",
    flip:function(){
      this.state="alive"
    }
    })
  }
}

Memory.prototype.display=function(){
  return this.tabTilesObject
}

Memory.prototype.flip=function(){
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


