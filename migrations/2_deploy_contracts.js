var Purchase = artifacts.require("./Purchase.sol");

module.exports = function(deployer, env, accounts) {
    deployer.deploy(Purchase, {from: accounts[0], value: 2});
};
