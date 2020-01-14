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
        return (
            <div className="idea-card idea-card--new">
                <div className="idea-card__buttons">
                    <button onClick={this.toggleEdit} className="btn">
                        {
                            (this.state.isEditing === true) ? 'Cancel' : 'Add New Idea'
                        }
                    </button>
                </div>

                {
                    (this.state.isEditing === true) && (
                        <IdeaForm onSubmit={this.onSubmit} toggleEdit={this.toggleEdit} />
                    )
                }
            </div>
        )
    }
}

export default connect(undefined, { addIdea })(NewIdeaCard)