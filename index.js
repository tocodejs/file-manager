import { parseArgs } from "./args.js";
import { list } from "./fs/list.js";
import os from "os";
import readline from "readline";

let sCommand = "";
let sUserName;

const welcomeUser = () => {
  sUserName = parseArgs()[0] ? parseArgs()[0].split("=")[1] : "Anonymous";
  console.log(`Welcome to the File Manager, ${sUserName}!`);
  changeDir(os.homedir());
};

const onExitHandler = () => {
  console.log(`Thank you for using File Manager, ${sUserName}!`);
  process.exit();
};

const changeDir = (sPath) => {
  if (sPath) {
    process.chdir(sPath);
    console.log(`You are currently in  ${process.cwd()}`);
  }
};

const handleUserCommand = (cCommand) => {
  let sCommandSanytized = sCommand.split(" ")[0].trim();
  switch (sCommandSanytized) {
    case "up":
      changeDir("../");
      break;
    case "cd":
      changeDir("." + sCommand.split(" ")[1].trim());
      break;
    case "cat path_to_file":
      break;
    case "ls":
      list();
      break;
    default:
      console.log("Invalid input");
  }
};

readline.emitKeypressEvents(process.stdin);
welcomeUser();
process.stdin.on("keypress", (char, key) => {
  if (key && key.name == "enter") {
    handleUserCommand(sCommand);
    sCommand = "";
  } else {
    sCommand += char;
  }
});

process.on("SIGINT", onExitHandler);
process.on("SIGQUIT", onExitHandler);
process.on("SIGTERM", onExitHandler);
