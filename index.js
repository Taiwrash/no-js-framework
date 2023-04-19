const { ContractKit } = require('@celo/contractkit');
require('dotenv').config();

const kit = ContractKit.newKit(process.env.CELO_ALFAJORES_URL);
kit.connection.addAccount(process.env.CELO_ALFAJORES_PK);

const MyContract = require('./build/contracts/MyContract.json');

async function deployContract() {
    const accounts = await kit.web3.eth.getAccounts();
    const from = accounts[0];

    const contract = new kit.web3.eth.Contract(
        MyContract.abi,
        { data: MyContract.bytecode }
    );

    const deployTx = contract.deploy().send({ from });
    const contractInstance = await deployTx;

    console.log(`Contract deployed at address: ${contractInstance.options.address}`);
}

deployContract();
