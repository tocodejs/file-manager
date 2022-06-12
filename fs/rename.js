import { existsSync, rename as renameFs } from "fs";

export const rename = async (srcName, destName) => {
  let src = process.cwd() + "/" + srcName;
  let dest = process.cwd() + "/" + destName;

  if (!existsSync(src) || existsSync(dest)) {
    throw new Error("FS operation failed");
  }

  renameFs(src, dest, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
};
