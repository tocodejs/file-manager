import { parseArgs } from "./args.js";
import { list } from "./fs/list.js";
import { read } from "./fs/read.js";
import { remove } from "./fs/delete.js";
import { rename as customRename } from "./fs/rename.js";
import { create as createFileCUston } from "./fs/create.js";
import { calculateHash } from "./hash/calcHash.js";
import { copy as copyFile } from "./fs/copy.js";
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
  let aParams = sCommand.split(" ");
  let sCommandSanytized = aParams[0].trim();
  let sPath = aParams[1] ? aParams[1].trim() : "";
  let sPathDest = aParams[2] ? aParams[2].trim() : "";
  switch (sCommandSanytized) {
    case "up":
      changeDir("../");
      break;
    case "cd":
      changeDir("." + sPath);
      break;
    case "cat":
      read(sPath);
      break;
    case "add":
      createFileCUston(sPath);
      break;
    case "rn":
      customRename(sPath, sPathDest);
      break;
    case "ls":
      list();
      break;
    case "cp":
      copyFile(sPath, sPathDest, false);
      break;
    case "mv":
      copyFile(sPath, sPathDest, true);
      break;
    case "rm":
      remove(sPath);
    case "hash":
      calculateHash(sPath).then(function (val) {
        console.log(val);
      });
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
