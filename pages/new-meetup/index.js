import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetupPage = () => {
	const addMeetupHandler = (enteredMeetup) => {
		console.log(enteredMeetup);
	};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default newMeetupPage;