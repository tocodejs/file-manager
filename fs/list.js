import { existsSync, readdirSync } from "fs";

export const list = async () => {
  const src = process.cwd();
  try {
    if (!existsSync(src)) {
      throw new Error("FS operation failed");
    }

    let files = readdirSync(src);
    console.log(files);
  } catch (e) {
    console.log("FS operation failed");
  }
};
