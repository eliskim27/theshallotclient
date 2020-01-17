import React from 'react';

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <span>{this.props.currentTestUserName}</span>
            </div>

        )
    }
}

export default NavBar