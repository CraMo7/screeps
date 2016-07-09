module.exports=function(e){function r(t){if(o[t])return o[t].exports;var n=o[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([function(e,r,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.loop=void 0;var n=o(2),a=t(n),u=o(3),i=t(u),l=o(1),s=t(l),c=function(){console.log("TICK in bundle from gameTickLoop.js");var e=Game.structures;console.log("structures collection:",e);for(var r=0;r<e.length;r++)console.log("struct #"+r,e[r]);var o=_.filter(Game.creeps,function(e){return"harvester"==e.memory.role});if(console.log("Harvesters: "+o.length),o.length<2){var t=Game.spawns.spawn.createCreep([WORK,CARRY,MOVE],void 0,{role:"harvester"});console.log("Spawning new harvester: "+t)}var n=Game.getObjectById(null);if(n){var u=n.pos.findClosestByRange(FIND_STRUCTURES,{filter:function(e){return e.hits<e.hitsMax}});u&&n.repair(u);var l=n.pos.findClosestByRange(FIND_HOSTILE_CREEPS);l&&n.attack(l)}for(var c in Game.creeps){var m=Game.creeps[c];"harvester"==m.memory.role&&a["default"].run(m),"upgrader"==m.memory.role&&i["default"].run(m),"builder"==m.memory.role&&s["default"].run(m)}};r.loop=c},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.memory.building&&0==e.carry.energy&&(e.memory.building=!1),e.memory.building||e.carry.energy!=e.carryCapacity||(e.memory.building=!0),e.memory.building){var r=e.room.find(FIND_CONSTRUCTION_SITES);r.length&&e.build(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else{var o=e.room.find(FIND_SOURCES);e.harvest(o[0])==ERR_NOT_IN_RANGE&&e.moveTo(o[0])}}};r["default"]=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.carry.energy<e.carryCapacity){var r=e.room.find(FIND_SOURCES);e.harvest(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else{var o=e.room.find(FIND_STRUCTURES,{filter:function(e){return(e.structureType==STRUCTURE_EXTENSION||e.structureType==STRUCTURE_SPAWN||e.structureType==STRUCTURE_TOWER)&&e.energy<e.energyCapacity}});o.length>0&&e.transfer(o[0],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE&&e.moveTo(o[0])}}};r["default"]=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.memory.upgrading&&0==e.carry.energy&&(e.memory.upgrading=!1),e.memory.upgrading||e.carry.energy!=e.carryCapacity||(e.memory.upgrading=!0),e.memory.upgrading)e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.moveTo(e.room.controller);else{var r=e.room.find(FIND_SOURCES);e.harvest(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}}};r["default"]=o}]);
//# sourceMappingURL=main.js.map