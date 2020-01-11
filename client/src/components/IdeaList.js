import React from 'react';
import { connect } from 'react-redux'
import IdeaListCard from './IdeaListCard';
import NewIdeaCard from './NewIdeaCard'
// import { getIdeas } from '../actions/ideaActions'

export class IdeaList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.ideas.map(idea => (
                        <IdeaListCard key={idea._id} idea={idea} />
                    ))
                }
                <NewIdeaCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ideas: state.ideas.ideas
})

export default connect(mapStateToProps)(IdeaList)