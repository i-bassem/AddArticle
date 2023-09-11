
const express = require('express')
var cors = require('cors')
const bodyparser = require('body-parser');

var app = express();
app.use(cors())
app.use(bodyparser.json());



const db = require('./db');

articlesRoutes = require('./controllers/article.controller')


// http://localhost:3000/login
app.post('/login', (req, res) => {
    // Replace with actual user authentication logic (e.g., verify username and password)
    const user = { username: 'your_username' };
    const token = jwt.sign(user, jwtSecretKey);
    res.json({ token });
});

//when you hit the /login with post request you get a token 
//which then used at the request header for certain api endpoint to get access to it 
// Middleware for JWT authentication
app.use((req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const user = jwt.verify(token, jwtSecretKey);
      req.user = user;
      next();
    } catch (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
  });
  

app.use('/api/articles', articlesRoutes)

const jwt = require('jsonwebtoken');
//const expressJwt = require('express-jwt'); // Middleware for JWT authentication

// Secret key for JWT
const jwtSecretKey = 'your_secret_key';



db.query("SELECT * FROM articles")
.then(data => {console.log(data)
    app.listen(3000,()=>console.log('server is running on :3000 '));
})
.catch(err=> console.log(err))






// const mysql = require('mysql');
// const bodyparser = require('body-parser')


// app.use(bodyparser.json());


// mysqlConnection.connect((err)=>{
//     if(err)
//     console.log('DB is working');
//     else
//     console.log('Error \n '+ JSON.stringify(err,undefined,2));
// })

// var mysqlConnection = mysql.createConnection({
//     host:'localhost',
//     user :'root',
//     password:'12345',
//     database :'article'
// })

// app.get('/articles', (req,res)=>{

//     mysqlConnection.query('SELECT * FROM article.articles', (err, rows, fields)=>{
//         if(!err)
//         console.log(rows);
//         else
//         console.log(err);  
//     })
// })
