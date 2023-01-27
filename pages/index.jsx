import MeetupList from '../components/meetups/MeetupList.jsx';
// connect mongoDB
import connectDB from '../utils/connectDB.js';
// meetup model
import Meetup from '../models/meetups.js';

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://plus.unsplash.com/premium_photo-1666544717484-e9aa3f57775c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80',
    address: 'Some address 54,some city 23',
    description: 'This is a First meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://plus.unsplash.com/premium_photo-1666544717484-e9aa3f57775c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80',
    address: 'Some address 24,some city 81',
    description: 'This is a Second meetup',
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // this is a special Next JS function. It runs during the build step of deployment.
  // It runs on server and you can do data-fetching,
  // database operations, file system operations etc. within this function because this function only runs on server and not on client side

  try {
    await connectDB();
    const meetupsData = await Meetup.find();
    console.log(meetupsData);
    return {
      props: {
        meetups: meetupsData.map((meetup) => ({
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        })),
      },
      // ===> below is Incremental Site Generation (ISG) <===
      // if there are (frequent) requests for this page then this page will be updated on the server-every 10 seconds,in this case- and
      // every newly regenerated page will replace old generated page
      revalidate: 10,
      // "With revalidate you can ensure that this page is also updated regularly after deployment"
    };
  } catch (error) {
    console.log(error);
  }
}
{
  /*
export async function getServerSideProps(context) {
  // this is a special Next JS function. It will always run on the server side after deployment.
  // you can do Database operations, fetch Data from API or file system within this function as well
  // NOTE: This function will run for every incoming request

  // context is an argument which gives you access to 'req' and 'res' objects (similar to in nodejs/express)
  // the 'req' object could be useful for authentication. You also have access to request headers and body
  // NOTE: we don't return 'res' object. we return an object with props in this special function

  // const req = context.req;
  // const res = context.res;

  // IMPORTANT: WE DON'T HAVE ACCESS TO 'req' and 'res' objects in getStaticProps()
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
*/
}
export default HomePage;
