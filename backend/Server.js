const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');
const cors = require('cors');

require('dotenv').config()

const app = express();
const port = process.env.port || 5000

mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(cors());
  
app.use('/todo', routes);

app.listen(port, console.log(`Votre Server à démaré sur : http://localhost:${port}`));