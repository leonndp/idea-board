import React from 'react';
import moment from 'moment'

export default class IdeaForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.idea ? props.idea.title : '',
            content: props.idea ? props.idea.content : '',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.content) {
            this.setState(() => ({ error: 'Please provide a title and content for your idea.' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content
            })
            this.props.toggleEdit();
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="idea-card__form">
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    className="text-input text-input--font-large"
                />
                <textarea
                    placeholder="content"
                    value={this.state.content}
                    onChange={this.onContentChange}
                    className="textarea"
                />
                <div className="idea-card__buttons">
                    <button type="submit" className="btn">Save</button>
                </div>

            </form>
        )
    }
}