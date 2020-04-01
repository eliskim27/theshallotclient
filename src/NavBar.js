import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <div
                class="navBar"
            >
                <div
                    class="navBarText"
                >
                    <h1>Welcome to THE SHALLOT!</h1>
                    
                    <h3>Hey {(this.props.user ? this.props.user.name : '')}! What's happenin'? </h3>
                </div>

                {this.props.singlearticle ? 
                <button 
                    onClick={this.props.detailsBackClick}
                    >Go Back</button> :
                <button 
                    onClick={this.props.filterclick}
                >
                    {this.props.filter ? "Show All Articles" : "See Saved Articles"}
                </button>
                }
            </div>

        )
    }
}

export default NavBar