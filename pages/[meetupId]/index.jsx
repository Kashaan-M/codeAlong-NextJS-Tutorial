import MeetupDetail from '../../components/meetups/MeetupDetail';
// connect mongoDB
import connectDB from '../utils/connectDB.js';
// meetup model
import Meetup from '../models/meetups.js';

function meetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
// you need to export getStaticPaths() function if you are going to use getStaticProps() function inside a Dynamic Page
// you don't need to use getStaticPaths() with getServerSideProps() or incase you are not using getServerSideProps() or getStaticProps() inside a Dynamic page
export async function getStaticPaths() {
  return {
    paths: [
      {
        // params is required
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    // this fallback property tells Next JS whether your 'paths' array contains all 'params' value or just some of them.It's value is boolean
    // 'fallback:false' means 'paths' contains all 'params' needed
    // 'fallback:true' also means Next JS will try to pregenerate a page for this 'params' (which we didn't specify in paths) dynamically on the server
    // fallback is a nice feature bcoz it allows you to pregenerate some of your (most frequently visited)pages (i.e. when fallback is true and some paths with params exist)
    // and generate others dynamically
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          'https://plus.unsplash.com/premium_photo-1666544717484-e9aa3f57775c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80',
        id: meetupId,
        title: 'A meetup page',
        address: 'Some address 54,some city 23',
        description: 'This is a First meetup description',
      },
    },
  };
}
export default meetupDetails;
