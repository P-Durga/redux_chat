import { connect } from 'react-redux'
import AddMessageComponent from '../components/MessageAdd.js'
import { addMessage } from '../actions/actions_index.js'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)