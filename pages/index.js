import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: '파리 동행구해요',
		image: 'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg',
		address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, 프랑스',
		description: '파리 동행구합니다 연락주세요 카톡:paris',
	},
	{
		id: 'm2',
		title: '런던 동행구해요',
		image: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_1280.jpg',
		address: 'Barrack Rd, Newcastle upon Tyne NE1 4ST 영국',
		description: '런던 동행구합니다 연락주세요!!! 카톡:london',
	},
];

const HomePage = () => {
	return (
		<>
			<MeetupList meetups={DUMMY_MEETUPS} />
		</>
	);
};

export default HomePage;
