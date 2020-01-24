import React from 'react'
import { connect } from 'react-redux'
import { login, register } from '../../actions/authActions'

/* const LandingPage = () => (
    <div className="wrapper">
        <h1>This is the LandingPage component!</h1>
    </div>
) */

class LandingPage extends React.Component {

    onLogin = (e) => {
        e.preventDefault()

        this.props.login({ email: 'test@test.com', password: 'password123' })
    }

    onRegister = (e) => {
        e.preventDefault()

        this.props.register({ email: 'fag@faggot.com', name: 'Dick Faggotson', password: 'password123' })
    }

    render() {
        return (
            <div className="wrapper">
                <h1>This is the LandingPage component!</h1>
                <button onClick={this.onLogin}>Login</button>
                <button onClick={this.onRegister}>Register</button>
            </div>
        )
    }
}



export default connect(undefined, { login, register })(LandingPage)