import fs from 'fs';
import path from 'path';

const distPath = './build/public/assets';

if (!fs.existsSync(distPath)) {
   fs.mkdirSync(distPath);
}

fs.readdirSync('./assets').forEach((file) => {
   fs.createReadStream(`./assets/${file}`)
      .pipe(fs.createWriteStream(path.join(distPath, file)));
});
