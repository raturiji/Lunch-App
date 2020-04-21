import React , {useState , useEffect} from 'react';
import './design/app.css'
import firebase from "firebase";
import Landing from './component/Landing'
import Dashboard from './component/Dashboard'
import firebaseConfig from './assets/config'


const App = () => {

  const [user,setUser] = useState(null);
  const [signIn,setSignIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      setSignIn(!!user);
      setUser(user);
    });
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <div className="App">
    {/* {signIn ? <Dashboard user={user} />: <Landing uiConfig={uiConfig} /> }  */
  
    }
    <Dashboard user={user} />
    </div>
  );
}

export default App;
