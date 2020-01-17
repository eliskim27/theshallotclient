import React from 'react'

class ArticleCard extends React.Component {
    render () {
        return (
            <div class="articleCard">
                <img 
                    src={this.props.article.urlToImage}
                    alt={"Somethings gone terribly wrong"}
                    class="articleImage"
                >
                </img>
                <h1> {this.props.article.title} </h1>
            </div>
        )
    }



}

export default ArticleCard