import { existsSync, copyFileSync } from "fs";

export const copy = async (srcName, destName) => {
  let src = process.cwd() + "/" + srcName;
  let dest = process.cwd() + "/" + destName;

  function errorHandler(err) {
    if (err) throw err;
  }
  if (!existsSync(src) || existsSync(dest)) {
    throw new Error("FS operation failed");
  }

  copyFileSync(src, dest);
};
