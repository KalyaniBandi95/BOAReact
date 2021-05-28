import React from "react";

const Header = (props) =>{
    return (
        <p>{props.message} using stateless function</p>
    )
}

export default Header

// export default class Header extends Component{
//     render(){
//         return(
//             <p>{this.props.message} and I'm child component</p>
//         )
//     }
// }