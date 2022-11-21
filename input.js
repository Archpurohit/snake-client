const {Movedown, Moveleft, Moveup, Moveright, MESSAGES} = require('./constants')

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

if (key === Moveup) {
  connection.write('Move: up');
}
if (key === Moveleft) {
  connection.write('Move: left');
}
if (key === Movedown) {
  connection.write('Move: down');
}
if (key === Moveright) {
  connection.write('Move: right');
}
if (MESSAGES[key]) {
  connection.write(MESSAGES[key]);
}
};


module.exports = {
  setupInput,
}


