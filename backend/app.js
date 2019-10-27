const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://toberixng:KjsLk7PzIJgRaStB@cluster0-yiwup.mongodb.net/test?retryWrites=true&w=majority')
.then(() => {
console.log('Successfully connected to the MongoDB Atlas!')
})
.catch((error) => {
    console.log('Unable to connect to MongoDb Atlas!');
    console.error(error);
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/recipes', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Thing created successfully!'
  });
});

app.use('/api/recipes', (req, res, next) => {
    const recipes = [
      {
        _id: 'oeihfzeoi',
        title: 'My First thing',
        ingredients: 'Tomatoes',
        instructions: 'To be served hot',
        difficulty: 25,
        time: 5,
      },
      {
        _id: 'oeihfzeoi',
        title: 'My Second thing',
        ingredients: 'Gegiri',
        instructions: 'To be served hot',
        difficulty: 55,
        time: 7,
      },
    ];
    res.status(200).json(recipes);
  });

module.exports = app;