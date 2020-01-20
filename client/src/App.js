import React from 'react';
import IdeaBoard from './components/IdeaBoard'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}
export default App;