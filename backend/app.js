const express = require('express');

const app = express();

app.use('/api/recipes', (req, res, next) => {
    const stuff = [
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
    res.status(200).json(stuff);
  });

module.exports = app;