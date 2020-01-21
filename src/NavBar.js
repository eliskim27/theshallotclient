import React from 'react';

class NavBar extends React.Component {
    render () {
        
        console.log(this.props)
        //need to fix this later (need to display name from this.props)

        return (
            <div>
                <span>hi how are you? {}</span>
                <button onClick={this.props.filterclick}>filter articles</button>

            </div>

        )
    }
}

export default NavBar