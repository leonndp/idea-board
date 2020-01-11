import React from 'react';
import IdeaList from './IdeaList'
import IdeaListFilters from './IdeaListFilters'
import { connect } from 'react-redux'
import { getIdeas } from './../actions/ideaActions'

class IdeaBoard extends React.Component {

    componentDidMount() {
        this.props.getIdeas();
    }

    render() {
        return (
            <div>
                <IdeaListFilters />
                <IdeaList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: state.ideas.ideas
})

export default connect(mapStateToProps, { getIdeas })(IdeaBoard)