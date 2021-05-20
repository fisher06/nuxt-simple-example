const fs = require('fs');
const https = require('https');

const express = require('express');
const consola = require('consola');
const helmet = require('helmet');

const { Nuxt, Builder } = require('nuxt');
const app = express();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // instead of body parser use this
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // secure app with various HTTP headers:
  // Remove X-Powered-By header
  // HSTS set to 6 months,
  // X-Content-Type-Options set to "nosniff",
  // X-Frame-Options set to SAMEORIGIN or DENY,
  // X-XSS-Protection set to "1; mode=block"
  // https://github.com/helmetjs/helmet#how-it-works
  app.use(helmet());
  // TODO: CSP
  // TODO: SRI

  // to make available user's IP address in the X-Forwarded-For header
  // https://cloud.google.com/appengine/docs/standard/nodejs/runtime
  app.set('trust proxy', true);

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Start the server
  let message;
  if (process.env.HTTPS === 'true' || process.env.HTTPS === '1') {
    // Enable https on localhost when env var HTTPS is set to '1' or 'true'.
    // Should be set for development only.
    // 'node server/index.js' only, does not work when running 'nuxt [...]'
    const privateKey = fs.readFileSync('localhost-key.pem', 'utf8');
    const certificate = fs.readFileSync('localhost.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(port, host);
    message = `Server listening on https://${host}:${port}`;
  } else {
    app.listen(port, host);
    message = `Server listening on http://${host}:${port}`;
  }

  consola.ready({
    message: message,
    badge: true
  });
}
start();
