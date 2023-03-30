import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<MeetupDetail
			image='https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg'
			title='테스트 타이틀'
			address='테스트 주소'
			description='테스트 설명'
		/>
	);
};

export const getStaticPaths = async () => {
	return {
        fallback: false,
		paths: [
			{
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
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: id,
				image: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg',
				title: '테스트 타이틀',
				address: '테스트 주소',
				description: '테스트 설명',
			},
		},
	};
};

export default MeetupDetails;
