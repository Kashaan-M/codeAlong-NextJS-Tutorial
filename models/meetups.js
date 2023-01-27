import mongoose from 'mongoose';
const meetupSchema = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});
const Meetup = mongoose.models.Meetup || mongoose.model('Meetup', meetupSchema);
export default Meetup;
