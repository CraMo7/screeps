import roleHarvester from "./creepRoles/harvester.js";
import roleUpgrader from "./creepRoles/upgrader.js";
import roleBuilder from "./creepRoles/builder.js";

const gameTickLoopFunc = () => {
  require("bundle.js");

  console.log("gameTickLoopFunc run in main.js")
}

// export {gameTickLoopFunc as loop};
module.exports.loop = gameTickLoopFunc;