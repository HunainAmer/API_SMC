var express = require('express');
var app = express();
var router = express.Router();
var body_parser = require('body-parser');
var port = process.env.PORT || 3000;
var ABI = require('./ABI.js');



    app.use(body_parser.json());

    router.get('/', function (req, res) {
        res.send('Hello from Hunain!')
        })

        // Mint Token Function
            router.get('/MinToken', function (req, res) {
            res.send('Mint Function is ready!')
            })

            router.post('/MinToken', async function (req, res) {
            var result = await  ABI.methods.MintToken(req.body.account, req.body.value).send({
            from : '0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
            // from : ABI.b,
            // value : ABI.extend.utils.toWei('0.00001','ether'),
            gas: '1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
        })

    
        //Approve 
            router.get('/Approve', function (req, res) {
                res.send('Approve Function is ready!')
            })
            router.post('/Approve', async function (req, res) {
            var result = await ABI.methods.approve(req.body.spender, req.body.value).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })
        
        //Burn Token
            router.get('/burnToken', function (req, res) {
                res.send('BurnToken Function is ready!')
            })
            router.post('/burnToken', async function (req, res) {
            var result = await ABI.methods.burn(req.body.value).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })


        //Decrease Allowance
            router.get('/DecreaseAllowance', function (req, res) {
                res.send('DecreaseAllowance Function is ready!')
            })
            router.post('/DecreaseAllowance', async function (req, res) {
            var result = await ABI.methods.decreaseAllowance(req.body.spender, req.body.addedValue).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result.status);
            })
        //Increase Allowanace
            router.get('/IncreaseAllowance', function (req, res) {
                res.send('IncreaseAllowance Function is ready!')
            })
            router.post('/IncreaseAllowance', async function (req, res) {
            var result = await ABI.methods.increaseAllowance(req.body.spender, req.body.addedValue).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result.status);
            })
        
        //Transfer Token 
            router.get('/TransferToken', function (req, res) {
                res.send('TransferToken Function is ready!')
            })
            router.post('/TransferToken', async function (req, res) {
            var result = await ABI.methods.transfer(req.body.to, req.body.value).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })

        //Transfer From
            router.get('/TransferFrom', function (req, res) {
                res.send('TransferFrom Function is ready!')
            })
            router.post('/TransferFrom', async function (req, res) {
            var result = await ABI.methods.transferFrom(req.body.from, req.body.to, req.body.value).send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })

        //Change Rate
            router.get('/changerate', function (req, res) {
                res.send('ChangeRate Function is ready!')
            })
        
            router.post('/changerate', async function (req, res) {
                var result = await  ABI.methods.ChangeRate(req.body.newRate).send({
                from : '0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas: '1000000'
                })
                res.send(JSON.stringify(result));
                console.log(result);
            })
        
        //Pause and Unpause Contract
            router.get('/pause', function (req, res) {
                res.send('Pause Function is ready!')
            })
            router.post('/pause', async function (req, res) {
            var result = await ABI.methods.pause().send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })
            
            router.get('/unpause', function (req, res) {
                res.send('Unpause Function is ready!')
            })
            router.post('/unpause', async function (req, res) {
            var result = await ABI.methods.unpause().send({
                from:'0x36A4491Ff3b763EB5809bb3A62233Fb192678b28',
                gas:'1000000'
            })
            res.send(JSON.stringify(result));
            console.log(result);
            })
        

    
app.use('/',router);
app.listen(port);
console.log('app is listining on port 3000');