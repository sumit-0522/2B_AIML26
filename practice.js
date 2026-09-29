const EventEmitter = require("events");
const ud = new EventEmitter();

ud.on("greet", (name) => {
  console.log(`Hello there 2B${name}`);
});

ud.on("exit", (code) => {
  console.log(`Exiting with code ${code}`);
});

ud.emit("greet", "Utkarsh ");
ud.emit("exit", 0);