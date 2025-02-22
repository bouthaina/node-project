const express = require('express')
const app = express()

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  router.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.send(`Addition: ${num1 + num2}`);
});

router.get('/multip/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.send(`Multiplication: ${num1 * num2}`);
});

app.use('/',router)

app.listen(3000,()=> console.log ("Server is running"))
