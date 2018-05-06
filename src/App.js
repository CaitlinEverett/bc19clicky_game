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
  constructor(props) {
    super(props);

    this.state = {
      score:0,
      topScore:0,
      count: 0,
      clicked:[],
      pics 
      // score
    }

    this.randomize = this.randomize.bind(this);
    this.keepScore = this.keepScore.bind(this);

  }


  
   randomize = (pics) => {
   const newpics = pics.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

      this.setState({ pics:newpics });
   };

  keepScore = (key) =>{
      if(this.state.clicked.includes(key)) {
        if(this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score });
        }
        this.setState({ 'score': 0});
      } else {
        let { clicked, score } = this.state;
        console.log(clicked);
        clicked.push(key);
        this.setState({clicked: clicked});
        score= score+1;
        this.setState({ 'score': score});
      }
      this.randomize(this.state.pics);
    }

  render() {
    //all stateful components have render function
    //render something and then ...
    console.log(this.state);
    return (
      //...return the HTML
      <div>
       <Navbar score={this.state.score} topScore={this.state.topScore}/>
       <Header />
        <Container >
        {this.state.pics.map(pic => (
          <Box
            key = {pic.key}
            id = {pic.key}
            image = {pic.image} //when passing an object use dot notation to pick correct part of object
            onclick = {this.keepScore}
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
