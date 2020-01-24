import React from 'react'
import { connect } from 'react-redux'
import { login, register } from '../../../actions/authActions'

class UserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            password: '',
            mode: 'login'
        }
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }))
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    }

    changeMode = (e) => {
        e.preventDefault();
        const mode = e.target.value
        this.setState(() => ({
            email: '',
            name: '',
            password: '',
            mode
        }))
    }

    onLogin = () => {
        // this.props.history.push('/dashboard')
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    onRegister = () => {
        this.props.register({
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.mode === 'login') {
            this.onLogin()
        } else if (this.state.mode === 'register') {
            this.onRegister()
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.changeMode} value="login" className="btn">Login</button>
                <button onClick={this.changeMode} value="register" className="btn">Register</button>
                <form onSubmit={this.onSubmit}>
                    {/* {this.state.error && <p>{this.state.error}</p>} */}
                    <input
                        type="text"
                        placeholder="Email"
                        autoFocus
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        className="text-input"
                    />
                    {
                        (this.state.mode === 'register') && (
                            <input
                                type="text"
                                placeholder="Name"
                                autoFocus
                                value={this.state.name}
                                onChange={this.onNameChange}
                                className="text-input"
                            />
                        )
                    }
                    <input
                        type="password"
                        placeholder="Password"
                        autoFocus
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        className="text-input"
                    />
                    <button type="submit" className="btn">Save</button>
                </form>
            </div>

        )
    }
}

export default connect(undefined, { login, register })(UserForm)