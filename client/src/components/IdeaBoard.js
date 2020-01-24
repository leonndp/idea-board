import React from 'react';
import IdeaList from './IdeaList'
import IdeaListFilters from './IdeaListFilters'
import { connect } from 'react-redux'
import { getIdeas } from './../actions/ideaActions'
import { logout } from './../actions/authActions'

class IdeaBoard extends React.Component {

    componentDidMount() {
        this.props.getIdeas();
    }

    onLogout = (e) => {
        e.preventDefault()

        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Idea Board</h1>
                <button onClick={this.onLogout}>Logout</button>
                <IdeaListFilters />
                <IdeaList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: state.ideas.ideas,
    auth: state.auth
})

export default connect(mapStateToProps, { getIdeas, logout })(IdeaBoard)