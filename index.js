const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express();
const members=require('./Members')
// app.get('/',(req, res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

//Init middleware
// app.use(logger);

//Handlebars middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Homepage route
app.get('/',(req,res)=> res.render('index',{
    title:'Member app',
    members
}))

//Set a static folder
app.use(express.static(path.join(__dirname,'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log('Server running....'));

const c=10;
