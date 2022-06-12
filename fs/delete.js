import { existsSync } from "fs";
import { unlink } from "fs/promises";

export const remove = async (srcName) => {
  const src = process.cwd() + "/" + srcName;

  if (!existsSync(src)) {
    console.log("FS operation failed");
    return;
  }
  try {
    await unlink(src);
    console.log("Remove complete!");
  } catch (e) {
    console.log("FS operation failed");
  }
};
