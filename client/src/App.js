import React from 'react';
import { Container } from 'reactstrap'

import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>This is the MERN app!</h1>
                </div>
            </Provider>
        )
    }
}
export default App;