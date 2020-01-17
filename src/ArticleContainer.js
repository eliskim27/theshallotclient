import React from 'react'
import ArticleCard from './ArticleCard'

class ArticleContainer extends React.Component {
    render () {
        return (
            this.props.allArticles.map(article => {
                return(
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                )
            })
        )
    }



}

export default ArticleContainer