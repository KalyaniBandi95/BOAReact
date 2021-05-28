import React from "react";
import ReactDOM from "react-dom"
import BookStore from "./bookApp/BookStore";
import Welcome from "./components/Welcome";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BookStore/>
    </Provider>,
    document.getElementById('app')
)