import { createBrotliCompress } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";

export const compress = async (srcName, destName) => {
  const bortli = createBrotliCompress();
  let srcPath = process.cwd() + "/" + srcName;
  let destPath = process.cwd() + "/" + destName;
  const src = createReadStream(srcPath);
  const dest = createWriteStream(destPath);
  pipeline(src, bortli, dest, (err) => {
    if (err) {
      throw err;
    }
  });
};
