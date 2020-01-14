import React from 'react';
import { connect } from 'react-redux'
import IdeaListCard from './IdeaListCard';
import NewIdeaCard from './NewIdeaCard'
import selectIdeas from '../selectors/ideasSelector'
// import { getIdeas } from '../actions/ideaActions'

export class IdeaList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="grid">
                <NewIdeaCard />
                {
                    this.props.ideas.map(idea => (
                        <IdeaListCard key={idea._id} idea={idea} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: selectIdeas(state.ideas.ideas, state.filters)
})

export default connect(mapStateToProps)(IdeaList)