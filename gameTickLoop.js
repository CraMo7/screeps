import roleHarvester from "./creepRoles/harvester.js";
import roleUpgrader from "./creepRoles/upgrader.js";
import roleBuilder from "./creepRoles/builder.js";

const gameTickLoop = () => {

// Always place this memory cleaning code at the very top of your main loop!

for(var name in Memory.creeps) {
  console.log("creep in memory:", name)
  if(!Game.creeps[name]) {
    delete Memory.creeps[name];
    console.log('Clearing non-existing creep memory:', name);
  }
}
console.log("TICK in bundle from gameTickLoop.js");

const structs = Game.structures;
console.log("structures collection:",structs)

for (let i = 0; i < structs.length; i++){
  console.log("struct #"+i,structs[i])
}

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
console.log('Harvesters: ' + harvesters.length);

if(harvesters.length < 2) {
  var newName = Game.spawns.spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
  console.log('Spawning new harvester: ' + newName);
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

for(var name in Game.creeps) {
  var creep = Game.creeps[name];
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