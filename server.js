const express = require ('express')
const app = express()
const port = 3000



app.get('/', (req, res)=>{
    res.send('99 bottles of beer on the wall' + " "+`<a href= "/98"> take one down, pass it around </a>`)
})

app.get('/:number_of_bottles', (req, res)=>{
    if(req.params.number_of_bottles <= 0 ){
        res.send( `You have ${req.params.number_of_bottles} bottles left,<a href= "/"> START OVER </a>`  )
    }else{
    res.send(`${req.params.number_of_bottles} bottles of beer on the wall ,<a href= "/${req.params.number_of_bottles- 1}"> take one down, pass it around </a> `)
    }
})


















app.listen(port,() => {
    console.log('listening on port' , port);
})