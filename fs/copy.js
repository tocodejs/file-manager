import { existsSync, copyFile, mkdir, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const copy = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files');
    const dest = join(__dirname, './files_copy');

    function errorHandler(err) {
        if (err) throw err;
    }
    if (!existsSync(src) || existsSync(dest)) {
        throw new Error('FS operation failed')
    }

    mkdir(dest, { recursive: true }, errorHandler);

    readdirSync(src).forEach(function(sFileName) {
        copyFile(src + '/' + sFileName, dest + '/' + sFileName, errorHandler);
    })
};

copy();