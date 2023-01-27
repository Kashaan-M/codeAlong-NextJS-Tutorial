// connect mongodb
import connectDB from '../../utils/connectDB';
// mongoose model
import Meetup from '../../models/meetups';

// handler function
// handle only POST request to /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await connectDB();
      const addMeetup = await Meetup.create(data);
      //console.log(addMeetup);
      res.status(201).json({ msg: 'Meetup Successfully added' });
    } catch (error) {
      console.log(error);
    }
  }
}
export default handler;
