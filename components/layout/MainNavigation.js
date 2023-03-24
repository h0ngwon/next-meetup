import Link from 'next/link'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>밋업</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>만남들</Link>
					</li>
					<li>
						<Link href='/new-meetup'>새로운 만남</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
