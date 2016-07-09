export default () => {
  for(var name in Memory.creeps) {
    console.log("creep in memory:", name)
    if(!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}