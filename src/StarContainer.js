import React from 'react'
import ArticleCard from './ArticleCard'

class StarContainer extends React.Component {
    render () {
        console.log(this.props)
        console.log(this.props.displayArticles)
        //need to find out tommorrow: how to make All articles where article.id == displayArticles.id 
        return (
            this.props.displayArticles.map(article => {
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

export default StarContainer