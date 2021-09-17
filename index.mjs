import path from 'path';

const require = createRequire(import.meta.url);

exports.get = (...args) => {
  delete require.cache[path.join(process.cwd(), `node_modules`, `config`, `lib`, `config.js`)];
  const config = require("config");
  return config.get(...args);
}
