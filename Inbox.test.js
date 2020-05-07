const assert= require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const {bytecode,interface} =require('../compile');
const web3 = new Web3(ganache.provider());
let accounts;
let inbox;
const _INITIAL='hi vijay';
beforeEach( async () => {
  accounts = await web3.eth.getAccounts() //importing unlock accounts
  inbox=await new web3.eth.Contract(JSON.parse(interface))  //testing the javascript file
  .deploy({data:bytecode,arguments:['hi vijay']}) //deploying the contract
  .send({from:accounts[0],gas:'1000000'});// selecting one account
    
    });
describe('inbox',() => {
    it('deploys a contract',() => {
       assert.ok(inbox.options.address);
    });
    it('has a default message',async()=>{  // this is for checking the message of solidity code
        const message=await inbox.methods.message().call();
        assert.equal(message,'hi vijay')
    });
    it('can change message',async()=>{    // this is for to change arguments  
        await inbox.methods.setMessage('bye').send({from:accounts[0]})
        const message=await inbox.methods.message().call();   // in this two paranthesis one for arguments and other for return ther value
        assert.equal(message,'bye')
    })
});