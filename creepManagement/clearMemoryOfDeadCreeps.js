export default () => {
  for (let key in Memory.creeps){
    if (!Game.creeps[key]){
      delete Memory.creeps[key];
      console.log('Clearing non-existing creep memory:', key);
    }
  }
}