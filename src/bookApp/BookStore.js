import React, { Component } from 'react'
import AuthorList from './AuthorList'
import BookList from './BookList'
import BookDetails from './BookDetails'
import AuthorDetails from './AuthorDetails'

export default class BookStore extends Component{

    render(){
        return (
            <div>
                I'm from Book Store Page
                <BookList/><br/><br/>
                <AuthorList/><br/> <br/>
                <AuthorDetails/>
                <BookDetails/>
            </div>
        )
    }
}