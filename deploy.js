const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {bytecode,interface} =require('./compile');

const provider=new HDWalletProvider(
    'milk border lobster liquid stage sock lion sadness describe noodle dirt nominee',
    'https://rinkeby.infura.io/v3/f79dd3f0a48e4806b41cba7d205bc449'
);
const web3=new Web3(provider)

    const deploy= async ()=>{   
        accounts = await web3.eth.getAccounts()
        console.log('attempting to deploy from account',accounts[0]);
    const result= await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode,arguments:['hi vijay']})
        .send({from:accounts[0],gas:'1000000'});
        console.log('we are going to deploy', result.options.address);
    };
    deploy();
