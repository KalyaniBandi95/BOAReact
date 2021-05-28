import React, { Component } from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component{

    render(){
        if(!this.props.book){
            return (<div>
                Select a book to get started
            </div>)
        }
        return (
            <div>
                <h2><b>Book Details</b></h2>
                <div className='col-6'><h5><b>Title: </b>{this.props.book.title}</h5></div>
                <div className='col-6'><h5><b>Pages: </b>{this.props.book.nop}</h5></div>
                <div className='col-6'><h5><b>Publisher: </b>{this.props.book.publications}</h5></div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        book: state.active
    }

}
export default connect(mapStateToProps)(BookDetails)