const express = require('express');
const cors = require('cors');

const quiz = require('./routes/quiz');
const admin = require('./routes/admin');
const analytics = require('./routes/analytics');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/quiz', quiz);
app.use('/api/admin', admin);
app.use('/api/analytics', analytics);

app.get('/', (req,res)=>{
  res.json({status:'API online'});
});

app.listen(process.env.PORT || 3000, ()=>{
 console.log('Servidor iniciado');
});