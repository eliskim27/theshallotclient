import React from 'react';

class NavBar extends React.Component {
    render () {
        // let me = this.props.user.name
        //need to fix this later (need to display name from this.props this.props.name doesn't work.
        return (
            <div>
                <div>
                    <span>Hey {(this.props.user ? this.props.user.name : '')}! What's happenin' </span>
                </div>
                
                {this.props.singlearticle ? 
                <button onClick={this.props.detailsBackClick}>Go Back</button> :
                <button 
                    onClick={this.props.filterclick}
                >
                    {this.props.filter ? "Show All Articles" : "See Favorites"}
                </button>
                }
            </div>

        )
    }
}

export default NavBar