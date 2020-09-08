import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList.js'

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)