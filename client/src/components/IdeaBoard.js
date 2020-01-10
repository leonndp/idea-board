import React from 'react';
import IdeaList from './IdeaList'
import { connect } from 'react-redux'
import { getIdeas } from './../actions/ideaActions'

class IdeaBoard extends React.Component {
    componentDidMount() {
        this.props.getIdeas();
    }

    render() {
        return (
            <div>
                <IdeaList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: state.ideas
})

export default connect(mapStateToProps, { getIdeas })(IdeaBoard)