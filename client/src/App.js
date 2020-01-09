import React from 'react';
import IdeaBoard from './components/IdeaBoard'

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <IdeaBoard />
                </div>
            </Provider>
        )
    }
}
export default App;