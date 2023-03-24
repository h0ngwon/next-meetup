import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		props.onAddMeetup(meetupData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>만남 제목</label>
					<input
						type='text'
						required
						id='title'
						ref={titleInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>사진</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>주소</label>
					<input
						type='text'
						required
						id='address'
						ref={addressInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>만남 설명</label>
					<textarea
						id='description'
						required
						rows='5'
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>새로운 만남 추가</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
