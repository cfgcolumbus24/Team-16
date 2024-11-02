import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import dbTestRouter from './routes/dbTest.js';
import dbRouter from './routes/db.js';
import * as dotenv from 'dotenv';
import mongoose, { connect, Model, Schema } from 'mongoose';
dotenv.config()

const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json());
app.use('/', indexRouter);
app.use('/db', dbRouter);
app.use('/test', dbTestRouter);

const PORT = process.env.PORT || 5050;
const URI = process.env.ATLAS_URI || '';

mongoose.connect(URI)
.then(() => {
  console.log("Connected to mongodb")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
