const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledCampaignFactory = require("./build/CampaignFactory.json");

// Importing and configuring our .env file that we use to securely store our environment variables
const dotenv = require("dotenv");
dotenv.config();

const provider = new HDWalletProvider(
  // remember to change this to your own phrase & endpoint!
  process.env.ACCOUNT_MNEMONIC,
  process.env.RINKEBY_ENDPOINT
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledCampaignFactory.abi)
    .deploy({ data: compiledCampaignFactory.evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();
