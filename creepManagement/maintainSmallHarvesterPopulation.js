export default () => {
  var harvesters = _.filter(Game.creeps, creep => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);

  if(harvesters.length < 2) {
    const existingHarvIds = []
    for (let i = 0; i < harvesters.length; i++){
      existingHarvIds.push(harvesters[0].memory.id)
    }
    let newHarvId = null;
    for (let i = 0; i < harvesters.length; i++){
      for (let j = 0; j < existingHarvIds.length; j++){
        if (i !== existingHarvIds[j]) {
          newHarvId = i;
        }
      }
    }
    var newHarvester = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], ("harvester" + newHarvId), {role: "harvester", id: newHarvId});
    console.log("Spawning new harvester: " + newHarvester);
  }
}