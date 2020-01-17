import React from 'react';
import './App.css';
import ArticleContainer from './ArticleContainer'

class App extends React.Component {
  state = {
    allArticles: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/articles`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allArticles: data
      })
    })
  }


  render(){
    return (
      <div className="App">
        <ArticleContainer 
          allArticles={this.state.allArticles}
        />
      </div>
    );
  }
}

export default App;
