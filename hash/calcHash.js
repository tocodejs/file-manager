import { readFile } from "fs/promises";
import { createHash } from "crypto";

export const calculateHash = async (srcName) => {
  const src = process.cwd() + "/" + srcName;
  let oHash = createHash("sha256");

  try {
    let data = await readFile(src);
    oHash.update(data);
    let hex = oHash.digest("hex");
    return hex;
  } catch (err) {
    if (err) throw err;
  }
};

