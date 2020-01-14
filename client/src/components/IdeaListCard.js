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
            <div className="idea-card">

                <div className="idea-card__buttons">
                    <button className="btn" onClick={this.toggleEdit}>{this.state.isEditing === true ? 'Cancel' : 'Edit'}</button>
                    <button className="btn btn--x" onClick={this.onRemove}>X</button>
                </div>


                {
                    (this.state.isEditing === true) ? (
                        <IdeaForm idea={this.props.idea} onSubmit={this.onSubmit} toggleEdit={this.toggleEdit} />
                    ) : (
                            <div className="wrapper wrapper--no-padding">
                                <h3 className="idea-card__title">{this.props.idea.title}</h3>
                                <p>{this.props.idea.content}</p>
                            </div>
                        )
                }

            </div>
        )
    }
}



export default connect(undefined, { removeIdea, updateIdea })(IdeaListCard)