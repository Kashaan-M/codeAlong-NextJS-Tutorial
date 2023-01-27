import NewMeetupForm from '../../components/meetups/NewMeetupForm.jsx';
import { useRouter } from 'next/router';
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    // we need router for `programmatic navigation` which in simple english means that
    // we want to redirect to HomePage after user submits a form
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredMeetupData),
    });
    {
      /*const data = await response.json();*/
    }
    {
      /*console.log(data);*/
    }
    // navigating to home
    router.push('/');
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetupPage;
