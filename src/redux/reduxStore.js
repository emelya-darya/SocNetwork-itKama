import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";



const reducers = combineReducers({
	forDialogsData: dialogsReducer,
	forProfileData: profileReducer,
	forNavbarData: friendsReducer,
	forUsersData: usersReducer,
	authData: authReducer
})

const store = legacy_createStore(reducers)

window.store = store

export { store }

