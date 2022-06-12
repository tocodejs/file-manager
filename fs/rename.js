import { existsSync, rename as renameFs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const rename = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    let src = join(__dirname, './files/wrongFilename.txt');
    let dest = join(__dirname, './files/properFilename.md');

    if (!existsSync(src) || existsSync(dest)) {
        throw new Error('FS operation failed')
    }

    renameFs(src, dest, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
    });
};

rename();