import mongoose from 'mongoose';
async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/NextJS-tutorial-meetups');
}
export default connectDB;
