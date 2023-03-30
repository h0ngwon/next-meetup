import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetupPage = () => {
	const router = useRouter();

	const addMeetupHandler = async (enteredMeetup) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetup),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);

		router.push('/');
	};

	return (
		<>
			<Head>
				<title>밋업</title>
				<meta
					name='설명'
					content='전 세계 사람들과 밋업을 통해 만나보세요!'
				></meta>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default newMeetupPage;
