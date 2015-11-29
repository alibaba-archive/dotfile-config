var path = require('path');
var fs = require('fs');

var root;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE
  || process.env.APPDATA
  || process.env.TMP
  || process.env.TEMP;
} else {
  root = process.env.HOME
  || process.env.TMPDIR
  || '/tmp';
}

module.exports = Config;

function Config(name) {
  if (!(this instanceof Config)) {
    return new Config(name);
  }

  this.path = path.join(root, name);
}

Config.prototype.get = function () {
  try {
    return JSON.parse(fs.readFileSync(this.path, 'utf8'));
  } catch (err) {
    return {};
  }
};

Config.prototype.set = function (config) {
  if (process.env.USER === 'root') {
    return;
  }
  try {
    fs.writeFileSync(this.path, JSON.stringify(config, null, 2) + '\n');
  } catch (err) {
    return;
  }
};
