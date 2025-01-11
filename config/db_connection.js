import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

// const MONGO_URI = 'mongodb://localhost:27017/koinx'
const MONGO_URI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log('MongoDB connection established successfully', connectioninstance.connection.host);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};


export default connectDB;