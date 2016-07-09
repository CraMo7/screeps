module.exports=function(e){function r(n){if(o[n])return o[n].exports;var t=o[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([function(e,r,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.loop=void 0;var t=o(2),a=n(t),u=o(3),i=n(u),l=o(1),c=n(l),d=function(){console.log("TICK in bundle from gameTickLoop.js");var e=Game.getObjectById(null);if(e){var r=e.pos.findClosestByRange(FIND_STRUCTURES,{filter:function(e){return e.hits<e.hitsMax}});r&&e.repair(r);var o=e.pos.findClosestByRange(FIND_HOSTILE_CREEPS);o&&e.attack(o)}for(var n in Game.creeps){var t=Game.creeps[n];"harvester"==t.memory.role&&a["default"].run(t),"upgrader"==t.memory.role&&i["default"].run(t),"builder"==t.memory.role&&c["default"].run(t)}};r.loop=d},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.memory.building&&0==e.carry.energy&&(e.memory.building=!1),e.memory.building||e.carry.energy!=e.carryCapacity||(e.memory.building=!0),e.memory.building){var r=e.room.find(FIND_CONSTRUCTION_SITES);r.length&&e.build(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else{var o=e.room.find(FIND_SOURCES);e.harvest(o[0])==ERR_NOT_IN_RANGE&&e.moveTo(o[0])}}};r["default"]=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.carry.energy<e.carryCapacity){var r=e.room.find(FIND_SOURCES);e.harvest(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else{var o=e.room.find(FIND_STRUCTURES,{filter:function(e){return(e.structureType==STRUCTURE_EXTENSION||e.structureType==STRUCTURE_SPAWN||e.structureType==STRUCTURE_TOWER)&&e.energy<e.energyCapacity}});o.length>0&&e.transfer(o[0],RESOURCE_ENERGY)==ERR_NOT_IN_RANGE&&e.moveTo(o[0])}}};r["default"]=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={run:function(e){if(e.memory.upgrading&&0==e.carry.energy&&(e.memory.upgrading=!1),e.memory.upgrading||e.carry.energy!=e.carryCapacity||(e.memory.upgrading=!0),e.memory.upgrading)e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.moveTo(e.room.controller);else{var r=e.room.find(FIND_SOURCES);e.harvest(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}}};r["default"]=o}]);
//# sourceMappingURL=main.js.map