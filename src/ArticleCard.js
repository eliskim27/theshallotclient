import React from 'react'

class ArticleCard extends React.Component {
    render () {
        return (
            <div>
                <h1> {this.props.article.title} </h1>
                <p> {this.props.article.author} </p>
            </div>
        )
    }



}

export default ArticleCard