import countryStateReducers from './countryStateReducers'
import reduxCrudReducer from './reduxCrudReducer'
import firebaseCrudReducer from './firebaseCrudReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' 
import { combineReducers } from 'redux'


const rootReducers = combineReducers({
	countries: countryStateReducers,
	reduxCrud: reduxCrudReducer,
	firebaseCrud: firebaseCrudReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
})

export default rootReducers