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

  
  
  
console.log(signIn)
  return (
    <div className="App">
     {signIn ? <Dashboard user={user} />: <Landing /> }  


    </div>
  );
}

export default App;
