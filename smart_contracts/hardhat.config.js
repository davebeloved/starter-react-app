require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/BmzyxT8-9OfybM5N6QPMWXOhfOc5gc3l",
      accounts: ["04d826dbc410beed1f0284f794787d5350f3b02b0cebc98655493e141c9e5a8a"]
    }
  }
};


