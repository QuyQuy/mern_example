const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>The server is working!</h1>')
});

app.get('/api/test', (req,res) => {
    const data = {
        success: true,
        message: 'Test API working',
        another: 'Property goes here'

    };
    res.send(data);
});

app.get('/api/user', (req,res) => {
    const user = {
        email: 'jim@mail.com',
        name: 'kate',
        username: 'kkg'
    }
    res.send(user)
});

app.post('/api/send-message', (req,res) => {
   console.log('data from client:', req.body) ;

   res.send({
       success: true,
       dataReceived: req.body
   })
});

app.listen(PORT, () => {
    console.log('server running @localhost:' + PORT);
}).on('error', (err) => {
    console.log('server lsiten error, do you already ahve a server running on PORT' + PORT);
});