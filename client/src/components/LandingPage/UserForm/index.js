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

    componentDidMount() {
        this.userFormDiv = document.querySelector('.user-form')
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.mode !== prevState.mode) {
            this.userFormDiv.classList.toggle('user-form--bg-blue')
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
            <div className="user-form">
                <div className="user-form__mode">
                    <button onClick={this.changeMode} value="login" className="user-form__tab">Login</button>
                    <button onClick={this.changeMode} value="register" className="user-form__tab user-form__tab--blue">Register</button>
                </div>

                <form onSubmit={this.onSubmit} className="user-form__form">
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