import roleHarvester from "./creepRoles/harvester.js";
import roleUpgrader from "./creepRoles/upgrader.js";
import roleBuilder from "./creepRoles/builder.js";

import maintainSmallHarvesterPopulation from "./creepManagement/maintainSmallHarvesterPopulation.js";
import maintainSmallUpgraderPopulation from "./creepManagement/maintainSmallUpgraderPopulation.js";

import clearMemoryOfDeadCreeps from "./creepManagement/clearMemoryOfDeadCreeps.js";


const gameTickLoop = () => {
  clearMemoryOfDeadCreeps();
  console.log("Game.time:", Game.time);
  maintainSmallHarvesterPopulation(2);
  maintainSmallUpgraderPopulation(2);

  Memory.controllerDowngradeIn--;

  const structs = Game.structures;
  let i = 0;
  let structsArray = [];
  for (let key in structs){
    console.log("structure #"+i++, structs[key]);
    console.log("struct key", key);
    structsArray.push(structs[key]);
  }


  var tower = Game.getObjectById(null);
  if(tower) {
    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => structure.hits < structure.hitsMax
    });
    if(closestDamagedStructure) {
      tower.repair(closestDamagedStructure);
    }

    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if(closestHostile) {
      tower.attack(closestHostile);
    }
  }

  for (let creepNameKey in Game.creeps) {
    let creep = Game.creeps[creepNameKey];
    if(creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if(creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if(creep.memory.role == 'builder') {
      roleBuilder.run(creep);
    }
  }
}

export {gameTickLoop as loop};