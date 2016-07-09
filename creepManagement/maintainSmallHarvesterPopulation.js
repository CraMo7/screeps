const maintainSmallHarvesterPopulation = (populationCap) => {
  const harvesters = _.filter(Game.creeps, creep => creep.memory.role == 'harvester');

  if (harvesters.length < populationCap || !harvesters){
    const existingHarvesterIds = []
    for (let i = 0; i < harvesters.length; i++){
      existingHarvesterIds.push(harvesters[i].memory.id)
    }
    let newHarvesterId = null;
    for (let i = 0; i < populationCap; i++){
      for (let j = 0; j < existingHarvesterIds.length; j++){
        if (i !== existingHarvesterIds[j]) {
          newHarvesterId = i;
        }
      }
    }
    var newHarvester = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], ("harvester" + newHarvesterId), {role: "harvester", id: newHarvesterId});
    console.log("Spawning new harvester: " + newHarvester);
  }
}
export default maintainSmallHarvesterPopulation;