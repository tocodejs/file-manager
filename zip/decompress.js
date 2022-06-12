import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";

export const decompress = async (srcName, destName) => {
  const bortli = createBrotliDecompress();
  let srcPath = process.cwd() + "/" + srcName;
  let destPath = process.cwd() + "/" + destName;
  const src = createReadStream(srcPath);
  const dest = createWriteStream(destPath);
  pipeline(src, bortli, dest, (err) => {
    if (err) {
      process.exitCode = 1;
      throw err;
    }
  });
};
