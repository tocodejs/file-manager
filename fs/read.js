import { existsSync } from "fs";
import { readFile } from "fs/promises";

export const read = async (sFileName) => {
  const src = process.cwd() + "/" + sFileName;

  if (!existsSync(src)) {
    throw new Error("FS operation failed");
  }

  const data = await readFile(src);
  console.log(data.toString());
};
