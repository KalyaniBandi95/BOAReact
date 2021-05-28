import React, { Component }  from "react"
import {connect} from 'react-redux'
import { bindActionCreators } from "redux"
import { selectAuthor } from '../action/UserAction'

 class AuthorList extends Component {
   
    renderAuthors() {
        return this.props.auth.map((author) =>{
            return (
                <li key={author.title} onClick = {() => this.props.sb(author)} className="list-group-item"> {author.author} </li>
            )
        })
    }


   render() {
        return(
               <ul className="list-group col-6">
               {this.renderAuthors()}
               </ul>

            )
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.authors
        }
    
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators({sb: selectAuthor}, dispatch)
    }

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList)