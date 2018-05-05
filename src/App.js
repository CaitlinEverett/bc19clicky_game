import React, { Component } from 'react';
import logo from './logo.svg'; 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from './components/Container';
import Box from './components/Box';
import Footer from './components/Footer';
import pics from "./pics.json";

const count = 0;

// any Class = a stateful component
// extends means inheritance - inheriting from Component
class App extends Component {
  state = {
    count: 0, 
    pics 
    // score
  }

  
   randomize = pics => {
     
   const newpics = pics.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
      this.setState({ pics:newpics });
   };



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
            key = {pic.id}
            image = {pic.image} //when passing an object use dot notation to pick correct part of object
            onclick = {this.randomize}
            array = {pics}
          />
        ))}
        </Container>
       <Footer count = {this.state.count} pic = {logo}/>
      </div>
    );
  }
}

export default App;
