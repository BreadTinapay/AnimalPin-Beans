import './App.css';
import Header from './components/header/Header'
import LoginPage from './components/loginPage/LoginPage'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import HomePage from './components/homepage/HomePage'

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomePage/>
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
