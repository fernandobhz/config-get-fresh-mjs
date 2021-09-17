import path from 'path';
import url from 'url';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const { log, error: consoleError } = console;

const die = (...args) => {
  consoleError(...args);
  process.exit(1);
};

export const get = (...args) => {
  delete require.cache[path.join(__dirname, `node_modules`, `config`, `lib`, `config.js`)];

  const config = require("config");
  return config.get(...args);
}
