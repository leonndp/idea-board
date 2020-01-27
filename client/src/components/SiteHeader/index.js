import React from 'react'
import { connect } from 'react-redux'
import { logout } from './../../actions/authActions'

class SiteHeader extends React.Component {
    onLogout = (e) => {
        e.preventDefault()

        this.props.logout()
    }

    render() {
        return (
            <div className="site-header">
                <div className="wrapper">
                    <div className="site-header__items">
                        <h1>Idea Board</h1>
                        <button onClick={this.onLogout} className="btn">Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(SiteHeader)