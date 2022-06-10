import classes from './LoadingBG.module.css'
import LoadingImg from '../../../assets/img/load.svg'


const LoadingBG = function () {
	return (
		<div className={classes.preloaderWrapper}>
			<img className={classes.preloaderImg} src={LoadingImg}></img>
		</div>
	)
	
}

export {LoadingBG}