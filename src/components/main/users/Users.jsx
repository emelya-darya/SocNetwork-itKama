import React from 'react'
import shortid from 'shortid'
import classes from './Users.module.css'
import { User } from './user/User'
import { LoadingBG } from '../../common/loading/LoadingBG'



const Users = function (props) {
	
	const pagesElements = []

	let dots = <span key={shortid.generate()} className={classes.pagesDots}>...</span>

	const page = function (n) {
		return (
			<div onClick={() => { props.onSetPage(n) }} pageid={n} className={`${classes.pageNumber} ${props.currentPage === n ? classes.activePage : ''}`} key={shortid.generate()}>
				<span> {n} </span>
			</div>
		)
	}

	if (props.pagesCount > 15) {
		for (let i = 1; i <= 3; i++) {
			pagesElements.push(
				page(i)
			)
		}
		pagesElements.push(dots)
		for (let i = props.pagesCount - 2; i <= props.pagesCount ; i++) {
			pagesElements.push(
				page(i)
			)
		}

	} else {
		for (let i = 1; i <= props.pagesCount; i++) {
			pagesElements.push(page(i))
		}
	}

	const onPreviousPage = function () {
		
		props.onPrevPage()

		if (props.pagesCount > 15 ) {
			
			let arrId = pagesElements.map(el => el.props.pageid)
			let indCurPage = arrId.indexOf(props.currentPage)
			
			if (indCurPage == 1 && props.currentPage != 1) {
				
				let i = pagesElements[0].props.pageid-1
				pagesElements.unshift(page(i))

			} else if (indCurPage == 4) {
				console.log('выполнилось тут');
				
				let i = pagesElements[4].props.pageid - 1
				console.log(i);
				pagesElements.splice(4, 0, page(i))
				pagesElements.pop()
			}

			// pagesElements.splice(4,3)
			// for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
			// 	pagesElements.push(page(i))
			// }
		}
	}


	// for (let i = 1; i <= (props.pagesCount); i++) {
	// 	pagesElements.push(
	// 		<div onClick={() => { props.onSetPage(i) }} className={`${classes.pageNumber} ${props.currentPage === i ? classes.activePage : ''}`} key={shortid.generate()}>
	// 			<span> {i} </span>
	// 		</div>)
	// }
	// if (pagesElements.length > 7) {
	// 	let a = props.currentPage
	// 	let length = pagesElements.length
	// 	let dots = <span key={shortid.generate()} className={classes.pagesDots}>...</span>

	// 	if (a <= 5) pagesElements.splice(5, length - 7, dots)

	// 	else if (a > 5 && a <= length - 7) {
	// 		pagesElements.splice(a, length - a - 2, dots)
	// 		pagesElements.splice(0, a - 5)
	// 	}

	// 	else if (a > length - 7) {
	// 		pagesElements.splice(3, length - 10, dots)
	// 	}

	// }


	let usersList = props.usersData.map(us => {
		return (

			<User
				onChangeFollowStat={props.onChangeFollowStat}
				onBlockButtonWhenFetch={props.onBlockButtonWhenFetch}
				key={shortid.generate()}
				name={us.name}
				status={us.status}
				country={'us.location.country'}
				town={'us.location.town'}
				isFollowed={us.followed}
				isFetchingFollow={us.fetchingFollowingProgress}
				id={us.id}
				photoBigSrc={us.photos.small}
			/>

		)
	})


	return (
		<div className={classes.wrapper}>

			{props.isLoading && <LoadingBG />}

			<div className={classes.usersPagination}>

				<div key={shortid.generate()} className={classes.arrow} onClick={onPreviousPage}><span>❮</span></div>
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