import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

const config = {
  apiKey: "AIzaSyB9z8MRXbjgm7RchjakJKUCwINYHXmObRs",
  authDomain: "react-net.firebaseapp.com",
  projectId: "react-net",
  storageBucket: "react-net.appspot.com",
  messagingSenderId: "1014884633958",
  appId: "1:1014884633958:web:49fc40f6af8d003da9cca7"
}

window.firebase.initializeApp(config)

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
) 