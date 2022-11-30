const express = require ('express')
const app = express()
const port = 3000



app.get('/', (req, res)=>{
    res.send(`<h5> Be Careful there is a chance that you randomly can get an error to throw you off. With this error there will be 3 bottles added to your total bottles.</h5> <h1>GOODLUCK</h1>99 bottles of beer on the wall <a href= "/98"> take one down, pass it around </a> `)
})

app.get('/:number_of_bottles', (req, res)=>{
    if(req.params.number_of_bottles <= 0 ){
        res.send( `You have ${req.params.number_of_bottles} bottles left,<a href= "/"> START OVER </a>`  )
    }else{
        let chance = Math.random()
        if(chance >= .3){
        res.send(`${req.params.number_of_bottles} bottles of beer on the wall ,<a href= "/${req.params.number_of_bottles- 1}"> take one down, pass it around </a> `)
        } else {
            res.send(` Sorry there was an error and ${Number(req.params.number_of_bottles)+3} bottles of beer on the wall are left ,<a href= "/${Number(req.params.number_of_bottles)+3}"> take one down, pass it around </a> `)
        }
    }
})

// was trying to attempt super bonus question
// app.get('/fibonacci/:number', (req,res)=>{
//     res.send(`${number}`)
// })


// function fib(n){
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     arr.push(arr[i - 2] + arr[i -1])
//   }
//  return arr[n]
// }














app.listen(port,() => {
    console.log('listening on port' , port);
})