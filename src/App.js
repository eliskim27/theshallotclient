import React from 'react';
import './App.css';
import ArticleContainer from './ArticleContainer'
import NavBar from './NavBar'
import SourceBar from './SourceBar'
import StarContainer from './StarContainer';


class App extends React.Component {
  state = {
    allArticles: [],
    allUsers: [],
    allStars: [],
    // currentUser: null
    currentTestUserId: 3,
    displayArticles: []
  }

  

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/articles`)
    .then(resp => resp.json())
    .then(data => {this.setState({allArticles: data})})
    fetch(`http://localhost:3000/api/v1/users`)
    .then(resp => resp.json())
    .then(data => {this.setState({allUsers: data})})
    fetch(`http://localhost:3000/api/v1/stars`)
    .then(resp => resp.json())
    .then(data => {this.setState({allStars: data})})
  }

  // for on submit of login form
  // will be given id from login function
  // findCurrentUser = (id) => {
  //   allUsers.find(user => user.name === id.name)
  //   this.setState({
  //     currentUser: id
  //   })
  // }






  render(){
    return (
      <div className="App">
        <NavBar currentTestUserName={this.state.currentTestUserName}/>
        <SourceBar />
        <ArticleContainer 
          allArticles={this.state.allArticles}
        />
        <StarContainer
          displayArticles={this.state.displayArticles}
        />
      </div>
    );
  }
}

export default App;
