import React from 'react';
import './App.css';
import ArticleContainer from './ArticleContainer'
import NavBar from './NavBar'
import SourceBar from './SourceBar'
import StarContainer from './StarContainer';
import ArticleDetails from './ArticleDetails';


class App extends React.Component {
  state = {
    allArticles: [],
    allUsers: [],
    allStars: [],
    // currentUser: null
    currentTestUserId: 1,
    navBarTestId: 7,
    displayArticles: [],
    filter : false,
    singlearticle : false,
    singlearticleshow : {}
  }

  detailsBackClick = () => {
    this.setState({ singlearticle: !this.state.singlearticle})
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
    this.setState({filter : !this.state.filter})
    let starsByUser =  this.state.allStars.filter(stars => stars.user_id === this.state.currentTestUserId)
    let starArticleIdsArray = starsByUser.map(star => star.article_id)
    let filterArticles = starArticleIdsArray.map(articleId => {
      return(this.state.allArticles.find(article => article.id === articleId))
    })
        this.setState({displayArticles : filterArticles})
  }

  singleClick = (article) => {
    this.setState({singlearticle : !this.state.singlearticle})  
    this.setState({singlearticleshow : article })
  }

  favoriteClick = (article) => {
    fetch(`http://localhost:3000/api/v1/stars`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.navBarTestId,
        article_id: article.id
      })
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }


  render(){
    return (
      <div className="App"> 
          <NavBar 
            user={this.state.allUsers.find(thing => thing.id === this.state.navBarTestId)} 
            filterclick = {this.filterClick}
            detailsBackClick={this.detailsBackClick}
            singlearticle={this.state.singlearticle}
            filter={this.state.filter}
          />
          <SourceBar 

          />
          {this.state.singlearticle ?
            <ArticleDetails 
              article={this.state.singlearticleshow} 
              favoriteClick={this.favoriteClick} 
            /> :
            this.state.filter ? 
              <StarContainer 
                displayArticles={this.state.displayArticles} 
                singleclick={this.singleClick}
              /> : 
              <ArticleContainer 
                allArticles={this.state.allArticles}
                singleclick={this.singleClick}
              />
          }
      </div>
    );
  }
}
export default App;
