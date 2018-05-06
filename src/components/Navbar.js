import React, {Component} from 'react';


class Navbar extends Component {


  render(){
    console.log("props");
    console.log(this.props);
    return (
      <nav className="navbar">
      <ul>
        <li className="brand"><a href="/">Clicky Game</a></li>
        <li className="">Click an image to begin!</li>
        <li>Score: {this.props.score} | Top Score: {this.props.topScore}</li>
      </ul>
     </nav>
    )
  }
    
};



export default Navbar;