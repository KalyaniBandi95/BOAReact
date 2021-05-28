import React, { Component }  from "react"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import { selectBook } from '../action/UserAction'

 class BookList extends Component {
   
    renderBooks() {
        return this.props.bk.map((book) =>{
            return (
                <li key={book.title} onClick = {() => this.props.sb(book)} className="list-group-item"> {book.title} </li>
            )
        })
    }


   render() {
        return(
               <ul className="list-group col-6">
               {this.renderBooks()}
               </ul>

            )
        }
    }

    function mapStateToProps(state){
        return {
            bk: state.books
        }

    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators({sb: selectBook}, dispatch)
    }

export default connect(mapStateToProps,mapDispatchToProps)(BookList)