const MyContract = require('./build/contracts/MyContract.json');

async function incrementCounter() {
    const accounts = await kit.web3.eth.getAccounts();
    const from = accounts[0];

    const contract = new kit.web3.eth.Contract(
        MyContract.abi,
        '<YOUR_CONTRACT_ADDRESS>'
    );

    await contract.methods.incrementCounter().send({ from });
}

document.getElementById('increment').addEventListener('click', async () => {
    await incrementCounter();
    location.reload();
});
