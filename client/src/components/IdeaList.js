import React from 'react';
import { connect } from 'react-redux'
import IdeaListCard from './IdeaListCard';
import NewIdeaCard from './NewIdeaCard'
// import { getIdeas } from '../actions/ideaActions'

export const IdeaList = (props) => (
    <div>
        {
            props.ideas.map(idea => (
                <IdeaListCard key={idea._id} idea={idea} />
            ))
        }
        <NewIdeaCard />
    </div>
)

const mapStateToProps = (state) => ({
    ideas: state.ideas
})

export default connect(mapStateToProps)(IdeaList)