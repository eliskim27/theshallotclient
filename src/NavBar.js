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
                <button onClick={this.props.filterclick}>filter articles</button>

            </div>

        )
    }
}

export default NavBar