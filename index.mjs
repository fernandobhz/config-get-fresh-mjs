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
  // it's needed when that package is used in `npm link`
  delete require.cache[path.join(__dirname, `node_modules`, `config`, `lib`, `config.js`)];

  // that is what is going to be when that package get used in `npm install`
  const [, scriptPath] = process.argv;
  const projectPath = path.dirname(scriptPath);
  delete require.cache[join(projectPath, `node_modules`, `config`, `lib`, `config.js`)];

  const config = require("config");
  return config.get(...args);
}
