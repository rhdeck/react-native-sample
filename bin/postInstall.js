#!/usr/env node
const spawnSync = require("child_process").spawnSync;
spawnSync("react-native", ["link"], { stdio: "inherit" });
