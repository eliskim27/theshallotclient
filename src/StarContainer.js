import React from 'react'
import ArticleCard from './ArticleCard'

class StarContainer extends React.Component {
    render () {
        return (
            <div>
            <h3>Currently Viewing All Favorites</h3>
                {this.props.displayArticles.map(article => {
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

export default StarContainer

