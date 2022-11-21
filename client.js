const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"172.22.187.165", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AP');
  });


  return conn;
  };

module.exports = {
  connect,
};