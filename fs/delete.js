import { existsSync, unlink } from "fs";

export const remove = async (srcName) => {
  const src = process.cwd() + "/" + srcName;

  if (!existsSync(src)) {
    throw new Error("FS operation failed");
  }

  unlink(src, (err) => {
    if (err) throw err;
    console.log("Remove complete!");
  });
};
