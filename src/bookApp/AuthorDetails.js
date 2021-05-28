import React, { Component } from 'react'
import {connect} from 'react-redux'

class AuthorDetails extends Component{

    render(){
        if(!this.props.author){
            return (<div>
                <b>Select any Author to get the deatils</b>
            </div>)
        }
        return (
            <div>
                <h2><b>Author Details</b></h2>
                <div className='col-6'><h5><b>Title: </b>{this.props.author.title}</h5></div>
                <div className='col-6'><h5><b>Author: </b>{this.props.author.author}</h5></div>
                <div className='col-6'><h5><b>No Of Books: </b>{this.props.author.noOfBooks}</h5></div>
                <div className='col-6'><h5><b>Rating: </b>{this.props.author.rating}</h5></div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
       author : state.activeAuth
    }

}
export default connect(mapStateToProps)(AuthorDetails)