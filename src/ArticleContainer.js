import React from 'react'
import ArticleCard from './ArticleCard'

class ArticleContainer extends React.Component {
    render () {
        return (
            <div>
            <h3>Currently Viewing All Articles</h3>
            {this.props.allArticles.map(article => {
                return(
                    <ArticleCard 
                        singleclick={this.props.singleclick}
                        key={article.id}
                        article={article}
                    />
                )
            })}
            </div>
        )
    }



}

export default ArticleContainer