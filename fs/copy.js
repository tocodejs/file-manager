import { existsSync, copyFileSync, unlinkSync } from "fs";

export const copy = async (srcName, destName, deleteSource) => {
  let src = process.cwd() + "/" + srcName;
  let dest = process.cwd() + "/" + destName;

  function errorHandler(err) {
    if (err) throw err;
  }
  try {
    if (!existsSync(src) || existsSync(dest)) {
      throw new Error("FS operation failed");
    }

    copyFileSync(src, dest);
    if (deleteSource) {
      unlinkSync(src);
    }
  } catch {
    console.log("FS operation failed");
  }
};
