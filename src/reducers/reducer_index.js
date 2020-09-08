import { combineReducers } from "redux"
import messages from "./messages.js"
import users from "./users.js"

const chat = combineReducers({
	messages,
	users
})

export default chat