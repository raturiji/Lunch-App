import React , {useState , useEffect} from 'react';
import './design/app.css'
import firebase from "firebase";
import Landing from './component/Landing'
import Dashboard from './component/Dashboard'
import firebaseConfig from './assets/config'
import Loader from './component/Loader'

const App = () => {
  const [user,setUser] = useState(null);
  const [signIn,setSignIn] = useState(false);
  const [loading,setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setSignIn(!!user);
    setLoading(false)
    });
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const adminLogin = (password) => {
    if(password === 'admin'){
      setSignIn(true)
      setUser('admin')
    }
    
  }

  return (
    <div className="App">
      {signIn ? <Dashboard user={user} />: loading ?  <Loader /> : <Landing onclick={adminLogin} /> }
    </div>
  );
}

export default App;
