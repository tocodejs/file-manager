import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import { existsSync } from 'fs';

export const create = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files/fresh.txt');

    if (existsSync(src)) {
        throw new Error('FS operation failed')
    }

    await writeFile(src, 'I am fresh and young ', {
        flag: 'wx'
    })
};

create();