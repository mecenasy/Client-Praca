import express from 'express';
import path from 'path';
import fs from 'fs';
import { preloadAll } from '@react-loadable/revised';
import useragent from 'express-useragent';
import cookieParser from 'cookie-parser';
import { router } from './router';
import https from 'https';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
   '/build',
   express.static(
      path.resolve(__dirname, '../build/public/')
   ));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(useragent.express());

app.use('/', router);

const keyPath = path.resolve(__dirname, '../build/cert');
const pubKeyPath = path.join(keyPath, 'key.pem');

const key = fs.readFileSync(pubKeyPath);

const certPath = path.resolve(__dirname, '../build/cert');
const pubCertPath = path.join(certPath, 'cert.pem');

const cert = fs.readFileSync(pubCertPath);
const server = https.createServer({ key: key, cert: cert }, app)

preloadAll().then(() => {
   server.listen(PORT, () => {
      console.log(`Server Client SSR started on port ${PORT}`);
   });
})
