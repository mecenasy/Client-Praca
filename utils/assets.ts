import  fs from 'fs';
import  path from 'path';

const distPath = './build/public/assets'
if (!fs.existsSync(distPath)) {
   fs.mkdirSync(distPath);
}

fs.createReadStream('./assets/favicon.ico').pipe(fs.createWriteStream(path.join(distPath, 'favicon.ico')));
fs.createReadStream('./assets/manifest.json').pipe(fs.createWriteStream(path.join(distPath, 'manifest.json')));
