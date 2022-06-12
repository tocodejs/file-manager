import { existsSync, readdirSync } from "fs";

export const list = async () => {
  const src = process.cwd();

  if (!existsSync(src)) {
    throw new Error("FS operation failed");
  }

  let files = readdirSync(src);
  console.log(files);
};
