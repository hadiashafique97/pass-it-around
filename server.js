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
//     let result = isFibonacci(req.params.number)
//     let message = ''
//     if(result){
//         message = "Very good. It is Fibonacci."
//     }else{
//         message = "I can tell this is not a fibonacci number."
//     }
//     res.send(message)
// })

// function isFibonacci(num) {
//     if (isSquare(5*(num*num)-4) && isSquare(5*(num*num)+4)) {
//        return true;
//     } else { return false; }
// }
// function isFibonacci(num, a = 0, b = 1) {
//     if(num === 0 || num === 1) {
//       return true;
//     }
//     let nextNumber = a+b;
//     if(nextNumber === num) {
//       return true ;
//     }
//     else if(nextNumber > num) {
//       return false;
//     }
//    return isFibonacci(num, b, nextNumber);
//   }
  













app.listen(port,() => {
    console.log('listening on port' , port);
})