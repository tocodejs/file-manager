import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const read = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));

    const src = join(__dirname, '/files/fileToRead.txt');

    if (!existsSync(src)) {
        throw new Error('FS operation failed')
    }

    const data = await readFile(src);
    console.log(data.toString());
};

read();