import React, { Component } from "react";

export default class Demo extends Component{
    constructor(props){
        super(props)
        this.state =  {data: 10}
    }

    render(){
        this.setState(() => {
            return (
                <p>I'm Bandi Kalyani</p>
            )
        })

        this.setState({data: this.state.data})
    }
}