module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loop = undefined;
	
	var _harvester = __webpack_require__(1);
	
	var _harvester2 = _interopRequireDefault(_harvester);
	
	var _upgrader = __webpack_require__(2);
	
	var _upgrader2 = _interopRequireDefault(_upgrader);
	
	var _builder = __webpack_require__(3);
	
	var _builder2 = _interopRequireDefault(_builder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var gameTickLoop = function gameTickLoop() {
	  console.log("TICK in bundle from gameTickLoop.js");
	  var tower = Game.getObjectById(null);
	  if (tower) {
	    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
	      filter: function filter(structure) {
	        return structure.hits < structure.hitsMax;
	      }
	    });
	    if (closestDamagedStructure) {
	      tower.repair(closestDamagedStructure);
	    }
	
	    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
	    if (closestHostile) {
	      tower.attack(closestHostile);
	    }
	  }
	
	  for (var name in Game.creeps) {
	    var creep = Game.creeps[name];
	    if (creep.memory.role == 'harvester') {
	      _harvester2.default.run(creep);
	    }
	    if (creep.memory.role == 'upgrader') {
	      _upgrader2.default.run(creep);
	    }
	    if (creep.memory.role == 'builder') {
	      _builder2.default.run(creep);
	    }
	  }
	};
	
	exports.loop = gameTickLoop;
	// module.exports.loop = gameTickLoop;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var roleHarvester = {
	  /** @param {Creep} creep **/
	  run: function run(creep) {
	    if (creep.carry.energy < creep.carryCapacity) {
	      var sources = creep.room.find(FIND_SOURCES);
	      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(sources[0]);
	      }
	    } else {
	      var targets = creep.room.find(FIND_STRUCTURES, {
	        filter: function filter(structure) {
	          return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
	        }
	      });
	      if (targets.length > 0) {
	        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	          creep.moveTo(targets[0]);
	        }
	      }
	    }
	  }
	};
	
	exports.default = roleHarvester;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var roleUpgrader = {
	  /** @param {Creep} creep **/
	  run: function run(creep) {
	    if (creep.memory.upgrading && creep.carry.energy == 0) {
	      creep.memory.upgrading = false;
	    }
	    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	      creep.memory.upgrading = true;
	    }
	
	    if (creep.memory.upgrading) {
	      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(creep.room.controller);
	      }
	    } else {
	      var sources = creep.room.find(FIND_SOURCES);
	      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(sources[0]);
	      }
	    }
	  }
	};
	
	exports.default = roleUpgrader;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var builderRole = {
	  /** @param {Creep} creep **/
	  run: function run(creep) {
	    if (creep.memory.building && creep.carry.energy == 0) {
	      creep.memory.building = false;
	    }
	    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	      creep.memory.building = true;
	    }
	    if (creep.memory.building) {
	      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	      if (targets.length) {
	        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
	          creep.moveTo(targets[0]);
	        }
	      }
	    } else {
	      var sources = creep.room.find(FIND_SOURCES);
	      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
	        creep.moveTo(sources[0]);
	      }
	    }
	  }
	};
	
	exports.default = builderRole;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map