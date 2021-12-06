import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider }  from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store'

const Context = React.createContext();

class ConnectedApp extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => (
          <App store={store} />
        )}
      </Context.Consumer>
    )
  }
}

ReactDOM.render(
  

    <Provider store={store}>
   <ConnectedApp />
    </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
