import React from 'react';
import { connect } from 'react-redux';
import { addIdea } from './../actions/ideaActions'
import IdeaForm from './IdeaForm.js'

class NewIdeaCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    toggleEdit = () => {
        this.setState(() => ({
            isEditing: !this.state.isEditing
        }))
    }

    onSubmit = (idea) => {
        this.props.addIdea(idea)
    }

    render() {
        return (this.state.isEditing) ? (
            <div className="idea-card">
                <div className="idea-card__buttons">
                    <button onClick={this.toggleEdit} className="btn">Cancel</button>
                </div>
                <IdeaForm onSubmit={this.onSubmit} toggleEdit={this.toggleEdit} />
            </div>
        ) : (
                <div className="idea-card idea-card--new" onClick={this.toggleEdit}>
                    <h1 className="idea-card__plus">+</h1>
                    <h2>Add New Idea</h2>
                </div>
            )
    }
}

export default connect(undefined, { addIdea })(NewIdeaCard)