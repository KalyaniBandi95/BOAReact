import React, { Component } from'react';

var userInfo = {
    userdata: 'User details goes here'
}

var myApp = ComposedComponent => class extends Component{
    componentDidMount(){
        this.setState({
            userdata: userInfo.userdata
        })
    }

    render(){
        return (            
            <ComposedComponent { ...this.props} { ...this.state} />
        )
    }
}

class MyApp extends Component{
    
}