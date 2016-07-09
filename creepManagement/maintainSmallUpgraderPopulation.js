const maintainSmallUpgraderPopulation = (populationCap) => {
  const upgraders = _.filter(Game.creeps, creep => creep.memory.role == 'upgrader');

  if (upgraders.length < populationCap || !upgraders) {
    const existingUpgraderIds = []
    for (let i = 0; i < upgraders.length; i++){
      existingUpgraderIds.push(upgraders[i].memory.id)
    }
    let newUpgraderId = null;
    for (let i = 0; i < populationCap; i++){
      for (let j = 0; j < existingUpgraderIds.length; j++){
        if (i !== existingUpgraderIds[j]) newUpgraderId = i;
      }
    }
    var newUpgrader = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], ("upgrader" + newUpgraderId), {role: "upgrader", id: newUpgraderId});
    console.log("Spawning new upgrader: " + newUpgrader);
  }
}

export default maintainSmallUpgraderPopulation;