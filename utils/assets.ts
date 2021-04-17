import fs from 'fs';
import path from 'path';

const distPath = './build/public/'
fs.createReadStream('./assets/favicon.ico').pipe(fs.createWriteStream(path.join(distPath, 'favicon.ico')));
