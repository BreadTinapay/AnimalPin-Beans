import React from 'react'
import './App.css';
import Header from './components/header/Header'
import LoginPage from './components/loginPage/LoginPage'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import HomePage from './components/homepage/HomePage'
import BookPage from './components/bookingpage/BookPage';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  React.useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
    console.log("auth user is", authUser ? authUser.email : authUser);

    if (authUser) {
        // user just logged in
        dispatch({
        type: "SET_USER",
        user: authUser,
        })
    } else {
        // user is logged out
        dispatch({
        type: "SET_USER",
        user: null,
        });
    }
    });
        unsubscribe();
}, [dispatch, user])

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path={"/bookings"} component={BookPage} />
        
        <Route exact path={["/", "/home"]}>
          <HomePage/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
