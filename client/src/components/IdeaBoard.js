import React from 'react';
import IdeaList from './IdeaList'
import IdeaListFilters from './IdeaListFilters'
import { connect } from 'react-redux'
import { getIdeas } from './../actions/ideaActions'
import SiteHeader from './SiteHeader'

class IdeaBoard extends React.Component {

    componentDidMount() {
        this.props.getIdeas();
    }

    render() {
        return (
            <div>
                <SiteHeader />
                <div className="wrapper">
                    <IdeaListFilters />
                    <IdeaList />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: state.ideas.ideas
})

export default connect(mapStateToProps, { getIdeas })(IdeaBoard)