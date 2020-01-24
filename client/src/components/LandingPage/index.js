import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

/* const LandingPage = () => (
    <div className="wrapper">
        <h1>This is the LandingPage component!</h1>
    </div>
) */

class LandingPage extends React.Component {

    onClick = (e) => {
        e.preventDefault()

        this.props.login({ email: 'test@test.com', password: 'password123' })
    }

    render() {
        return (
            <div className="wrapper">
                <h1>This is the LandingPage component!</h1>
                <button onClick={this.onClick}>Login</button>
            </div>
        )
    }
}



export default connect(undefined, { login })(LandingPage)