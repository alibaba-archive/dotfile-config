var config = require('./')('.dotfile-config.json');

config.set({
  foo: 'bar'
});

console.log(config.get().foo);
