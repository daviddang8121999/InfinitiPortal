import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import PrivateRoute from './Components/PrivateRoute';
import CreateListing from './Pages/CreateListing';



export default function App() {
  return (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}