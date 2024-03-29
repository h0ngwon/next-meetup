import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
	return (
        <>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name='설명' content={props.meetupData.description}>
            </meta>
        </Head>

		<MeetupDetail
			image={props.meetupData.image}
			title={props.meetupData.title}
			address={props.meetupData.address}
			description={props.meetupData.description}
		/>
        </>
	);
};

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://hhwooon:FALXwtsd9ubqzpGc@cluster0.fxvchkm.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	client.close();

	return {
		fallback: false,
		paths: meetups.map((meetup) => {
			return {
				params: {
					meetupId: meetup._id.toString(),
				},
			};
		}),
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.meetupId;
	const client = await MongoClient.connect(
		'mongodb+srv://hhwooon:FALXwtsd9ubqzpGc@cluster0.fxvchkm.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const selectedMeetup = await meetupsCollection.findOne({
		_id: new ObjectId(id),
	});
	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				image: selectedMeetup.image,
				address: selectedMeetup.address,
				description: selectedMeetup.description,
			},
		},
	};
};

export default MeetupDetails;
