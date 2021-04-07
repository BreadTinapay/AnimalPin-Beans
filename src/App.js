import './App.css';
import Header from './components/header/Header'
import LoginPage from './components/loginPage/LoginPage'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import HomePage from './components/homepage/HomePage'
import BookPage from './components/bookingpage/BookPage';

function App() {
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
