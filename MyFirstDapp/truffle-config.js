module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache local host
      port: 7545,            // Ganache port
      network_id: "5777",    // Match Ganache network ID
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",     // Match the version you're using
    },
  },
};


