import React from 'react';
import { connect } from 'react-redux';
import { removeIdea, updateIdea } from './../actions/ideaActions'
import IdeaForm from './IdeaForm.js'

class IdeaListCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    onRemove = () => {
        this.props.removeIdea(this.props.idea._id)
    }

    toggleEdit = () => {
        this.setState(() => ({
            isEditing: !this.state.isEditing
        }))
    }

    onSubmit = (idea) => {
        this.props.updateIdea(this.props.idea._id, { ...idea })
    }

    render() {
        return (
            <div>
                <button onClick={this.onRemove}>X</button>
                <button onClick={this.toggleEdit}>{this.state.isEditing === true ? 'Cancel' : 'Edit'}</button>
                {
                    (this.state.isEditing === true) ? (
                        <IdeaForm idea={this.props.idea} onSubmit={this.onSubmit} toggleEdit={this.toggleEdit} />
                    ) : (
                            <div>
                                <h3>{this.props.idea.title}</h3>
                                <p>{this.props.idea.content}</p>
                            </div>
                        )
                }

            </div>
        )
    }
}



export default connect(undefined, { removeIdea, updateIdea })(IdeaListCard)