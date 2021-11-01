import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddNewServices from './Pages/AddNewServices/AddNewServices';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/addNewServices'>
              <AddNewServices></AddNewServices>
            </PrivateRoute>
            <PrivateRoute path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>

            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
