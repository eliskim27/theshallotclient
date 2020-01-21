import React from 'react';
import './App.css';

class ArticleDetails extends React.Component {

    render() {
        // console.log(this.props.article)
        return (
            <div> 
                <img class="articleCard" src={this.props.article.urlToImage} alt="big nope" ></img>
                <h1>{this.props.article.title}</h1>
                <h3>{this.props.article.author}</h3>
                <div>{this.props.article.description}</div>
                <a href={this.props.article.url}>CLICK HERE TO SEE WHAT HAPPENS NEXT!!!</a>
                <br></br>
                <button onClick={() => this.props.favoriteClick(this.props.article)}>add to favorites</button>
            </div>
        )
    }

}

export default ArticleDetails