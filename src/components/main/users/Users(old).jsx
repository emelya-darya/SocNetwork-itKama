import shortid from 'shortid'
import classes from './Users.module.css'
import { User } from './user/User'
import * as axios from 'axios'


const Users = function (props) {

	// const usersData = [
	// 	{ id: 1, isFollowed: true, name: 'Darya', status: 'I wanna sleep', location: { country: 'Russia', town: 'Ufa' } },
	// 	{ id: 2, isFollowed: false, name: 'Lena', status: "I don't want to sleep", location: { country: 'USA', town: 'New York' } },
	// 	{ id: 3, isFollowed: false, name: 'Pete', status: 'I wanna sleep', location: { country: 'France', town: 'Paris' } },
	// 	{ id: 4, isFollowed: true, name: 'Jack', status: 'I wanna work', location: { country: 'Ukraine', town: 'Kiev' } },
	// 	{ id: 5, isFollowed: true, name: 'Steve', status: 'Im ok', location: { country: 'Italy', town: 'Madrid' } },
	// ]
	// ]

	const renderUsers = function () {
		if (props.usersData.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(responce => props.setUsers(responce.data.items))
		}

	}
	

	const users = props.usersData.map(us => {
		// debugger
		return (
			<User
				onChangeFollowStat={props.onChangeFollowStat}
				key={shortid.generate()}
				name={us.name}
				status={us.status}
				country={'us.location.country'}
				town={'us.location.town'}
				isFollowed={us.followed}
				id={us.id}
				photoBigSrc={us.photos.small}
			/>)
	})



	return (
		<div className={classes.wrapper}>
			<button onClick={renderUsers}>Render users</button>
			<div className={classes.users}>

				{users}

			</div>
			<div className={classes.btn}>
				<span>Show more</span>
			</div>

		</div>
	)
}

export { Users }