const maintainSmallHarvesterPopulation = (populationCap) => {
  var harvesters = _.filter(Game.creeps, creep => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);

  if(harvesters.length < populationCap || !harvesters) {
    const existingHarvIds = []
    for (let i = 0; i < harvesters.length; i++){
      existingHarvIds.push(harvesters[i].memory.id)
    }
    let newHarvId = 0;
    for (let i = 0; i < (harvesters.length || 1); i++){
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
export default maintainSmallHarvesterPopulation;