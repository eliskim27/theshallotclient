import React from 'react';

class ArticleDetails extends React.Component {
    state = {
        starred: false
    }

    favoriting = (article) => {
        this.setState({starred: !this.state.starred})
        this.props.favoriteClick(article)
    }

    unfavoriting = (article) => {
        this.setState({starred: !this.state.starred})
        this.props.unfavoriteClick(article)
    }

    render() {
        return (
            <div
                class="articleDetails"
            > 
                <img 
                    class="imageDetails"    
                    src={this.props.article.urlToImage} 
                    alt=" No Image Available" 
                ></img>
                <h1>{this.props.article.title}</h1>
                <h3>{this.props.article.author !== "null" ? this.props.article.author : ""}</h3>
                <div>{this.props.article.description}</div><br></br>
                <a href={this.props.article.url}>CLICK HERE TO SEE WHAT HAPPENS NEXT!</a><br></br>
                <br></br>
                <div>
                <button 
                    onClick={() => (
                        this.props.filter ? 
                            (this.state.starred ? null : this.unfavoriting(this.props.article)) :
                            (this.state.starred ? null : this.favoriting(this.props.article))
                    )
                    
                }
                >
                    {this.props.filter ? 
                        (this.state.starred ? "Removed from Saved" : "Remove from Saved") : 
                        (this.state.starred ? "Saved for Later!" : "Save for Later!")
                    }
                </button>
                </div>
            </div>
        )
    }

}

export default ArticleDetails