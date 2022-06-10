import React from 'react'
import shortid from 'shortid'
import classes from './Users.module.css'
import { User } from './user/User'
import { LoadingBG } from '../../common/loading/LoadingBG'



const Users = function (props) {

	const pagesElements = []

	for (let i = 1; i <= (props.pagesCount); i++) {
		pagesElements.push(
			<div onClick={() => { props.onSetPage(i) }} className={`${classes.pageNumber} ${props.currentPage === i ? classes.activePage : ''}`} key={shortid.generate()}>
				<span> {i} </span>
			</div>)
	}
	if (pagesElements.length > 7) {
		let a = props.currentPage
		let length = pagesElements.length
		let dots = <span key={shortid.generate()} className={classes.pagesDots}>...</span>

		if (a <= 5) pagesElements.splice(5, length - 7, dots)

		else if (a > 5 && a <= length - 7) {
			pagesElements.splice(a, length - a - 2, dots)
			pagesElements.splice(0, a - 5)
		}

		else if (a > length - 7) {
			pagesElements.splice(3, length - 10, dots)
		}

	}


	let usersList = props.usersData.map(us => {
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
				/>
			
		)
	})


	return (
		<div className={classes.wrapper}>

			{props.isLoading && <LoadingBG />}

			<div className={classes.usersPagination}>

				<div key={shortid.generate()} className={classes.arrow} onClick={props.onPrevPage}><span>❮</span></div>
				{pagesElements}
				<div key={shortid.generate()} className={classes.arrow} onClick={props.onNextPage}><span>❯</span></div>

			</div>
			<div className={classes.users}>

				{usersList}

			</div>
			<div className={classes.btn}>
				<span>Show more</span>
			</div>

		</div>
	)
}


export { Users }