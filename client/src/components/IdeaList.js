import React from 'react';
import { connect } from 'react-redux'
import IdeaListCard from './IdeaListCard';
// import { getIdeas } from '../actions/ideaActions'

export const IdeaList = (props) => (
    <div>
        {
            props.ideas.map(idea => (
                <IdeaListCard key={idea.id} idea={idea} />
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    ideas: state.ideas
})

export default connect(mapStateToProps)(IdeaList)