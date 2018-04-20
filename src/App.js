import React, { Component } from 'react';
import logo from './logo.svg'; 
import Navbar from './component/Navbar';
import Header from './component/Header';
import Container from './component/Container';
import Box from './component/Box';
import Footer from './component/Footer';

const pics = ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x250"];
const count = 0;

// any Class = a stateful component
// extends means inheritance - inheriting from Component
class App extends Component {
  state = {
    count: 0, 
    pics 
    // score
  }

  render() {
    //all stateful components have render function
    //render something and then ...
    return (
      //...return the HTML
      <div>
       <Navbar score={this.state.score} />
       <Header />
        <Container >
        {this.state.pics.map(pic => (
          <Box
            image = {pic} //when passing an object use dot notation to pick correct part of object
          />
        ))}
        </Container>
       <Footer count = {this.state.count} pic = {logo}/>
      </div>
    );
  }
}

export default App;
