import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import randomReducer from './randomReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    random: randomReducer
})

export default rootReducer