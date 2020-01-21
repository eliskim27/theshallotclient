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
    currentTestUserId: 1,
    navBarTestId: 4,
    displayArticles: [],
    filter : false
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


  filterClick = () => {
    console.log("clicked!")
    this.setState({filter : !this.state.filter})
    let display =  this.state.allStars.filter(stars => stars.user_id === this.state.currentTestUserId)
    // console.log(display.filter(articles => this.state.allArticles.id === articles.article_id)) ***does not work
    console.log(display)
    this.setState({displayArticles : display})
  }




  render(){
  //   console.log(this.state.allStars)
    console.log(this.state.allUsers)
  //   console.log(this.state.allArticles)
    return (
      <div className="App"> 
          <NavBar user={this.state.allUsers.find(thing => thing.id === this.state.navBarTestId)} filterclick = {this.filterClick}/>
          <SourceBar />
          {this.state.filter? <StarContainer displayArticles={this.state.displayArticles}/> :<ArticleContainer allArticles={this.state.allArticles}/>}
      </div>
    );
  }
}
export default App;
