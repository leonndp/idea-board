import React from 'react';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions'
import store from './store';

class App extends React.Component {
    componentDidMount() {
        if (store.getState().auth.token) {
            store.dispatch(loadUser())
        }

    }

    // componentDidUpdate() {
    //     if (store.getState().auth.token) {
    //         store.dispatch(loadUser())
    //     }
    // }

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}
export default App;