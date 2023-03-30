import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
	return (
		<>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

// export const getServerSideProps = async(context) => {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export const getStaticProps = async () => {
	// fetch data from API
	const client = await MongoClient.connect(
		'mongodb+srv://hhwooon:FALXwtsd9ubqzpGc@cluster0.fxvchkm.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find().toArray();
	client.close();
	// always return object
	return {
		props: {
			meetups: meetups.map((meetup) => {
				return {
                    id: meetup._id.toString(),
					title: meetup.title,
					image: meetup.image,
					address: meetup.address,
				};
			}),
		},
		revalidate: 1,
	};
};
export default HomePage;
