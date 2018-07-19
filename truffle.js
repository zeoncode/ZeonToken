module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: "0x5b0d2b79010d1948ed475bfb507da5d570354c61",
      network_id: 1,
      gasPrice: 10000000000
    }
  }
};
