import { existsSync, unlink } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const remove = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files/fileToRemove.txt');

    if (!existsSync(src)) {
        throw new Error('FS operation failed')
    }

    unlink(src, (err) => {
        if (err) throw err;
        console.log('Remove complete!');
    });
};

remove();