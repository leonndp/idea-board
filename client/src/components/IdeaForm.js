import React from 'react';

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
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input
                    type="text"
                    placeholder="content"
                    value={this.state.content}
                    onChange={this.onContentChange}
                />
                <button>Save</button>
            </form>
        )
    }
}