import React, { useState, useEffect } from 'react'
import shortid from 'shortid'
import classes from './Users.module.css'
import { User } from './user/User'
import { LoadingBG } from '../../common/loading/LoadingBG'
import { Pagination } from '@mui/material'
import { usersFetchingAPI } from "../../../DAL/fetchingAPI"



//!Эта компонента занимается только отрисовкой
const Users = function (props) { 

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
				
				<Pagination count={Math.ceil(props.totalUsersCount / props.pageSize)}
					color="primary"
					variant="outlined"
					shape="rounded"
					page={props.currentPage}
					onChange={(event, numberPage) => { props.setPage(numberPage)}} />
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