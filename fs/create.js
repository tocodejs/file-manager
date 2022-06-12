import { writeFile } from "fs/promises";
import { existsSync } from "fs";

export const create = async (sFileName) => {
  const src = process.cwd() + "/" + sFileName;
  try {
    if (existsSync(src)) {
      throw new Error("FS operation failed");
    }

    await writeFile(src, "", {
      flag: "wx",
    });
    console.log(`${sFileName} is created`);
  } catch (e) {
    console.log("FS operation failed");
  }
};
