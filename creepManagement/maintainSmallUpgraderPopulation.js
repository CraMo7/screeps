const maintainSmallUpgraderPopulation = (populationCap) => {
  var upgraders = _.filter(Game.creeps, creep => creep.memory.role == 'upgrader');
  console.log('upgraders: ' + upgraders.length);

  if(upgraders.length < populationCap || !upgraders) {
    const existingUpgraderIds = []
    for (let i = 0; i < upgraders.length; i++){
      existingUpgraderIds.push(upgraders[i].memory.id)
    }
    let newUpgraderId = null;
    for (let i = 0; i < (upgraders.length || 1); i++){
      for (let j = 0; j < existingUpgraderIds.length; j++){
        if (i !== existingUpgraderIds[j]) newUpgraderId = i;
      }
    }
    var newUpgrader = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], ("upgrader" + newUpgraderId), {role: "harvester", id: newUpgraderId});
    console.log("Spawning new upgrader: " + newUpgrader);
  }
}

export default maintainSmallUpgraderPopulation;