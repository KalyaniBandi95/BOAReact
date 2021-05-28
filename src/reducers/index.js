import { combineReducers } from 'redux'
import BookReducers from './reducer_book'
import AuthorReducers from './reducer_author'
import ActiveBooks from './reducer_active_book'
import ActiveAuthor from './reducer_active_author'

const rootReducer = combineReducers({
    books: BookReducers,
    authors: AuthorReducers,
    active: ActiveBooks,
    activeAuth: ActiveAuthor
})


export default rootReducer