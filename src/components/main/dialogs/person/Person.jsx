import classes from './Person.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? 'active' : 'dialogs__person'

function Person(props) {
	return (
		<li className={ classes.setActive }> <NavLink to= { '/dialogs/' + props.id}> { props.name } </NavLink> </li>
	)
}

export { Person }
