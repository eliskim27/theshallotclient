import React from 'react'
import ArticleCard from './ArticleCard'

class StarContainer extends React.Component {
    render () {
        return (
            this.props.displayArticles.map(article => {
                return(
                    <ArticleCard 
                        singleclick={this.props.singleclick}
                        key={article.id}
                        article={article}
                    />
                )
            })
        )
    }



}

export default StarContainer

