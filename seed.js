'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

  await Book.create({
    title: 'Book 1',
    description: 'Book 1 description',
    status: 'Book 1 status',
  });

  console.log('Book 1 was created');

  await Book.create({
    title: 'Book 2',
    description: 'Book 2 description',
    status: 'Book 2 status',
  });

  console.log('Book 2 was created');

  await Book.create({
    title: 'Book 3',
    description: 'Book 3 description',
    status: 'Book 3 status',
  });

  console.log('Book 3 was created');

  mongoose.disconnect();
}

seed();