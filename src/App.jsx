import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import TopBar from './components/topbar/topbar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Settings from './pages/settings/settings';
import About from './pages/about/about';
import Write from './pages/write/write';

const user = true;
const App = () => (
    <div className='container'>
    <TopBar/>
    {/*<Home/>*/}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home/> : <Register />} />
          <Route path="/about" element={user ? <About/> : <Login />} />
          <Route path="/login" element={user ? <Home/> :<Login />} />
          <Route path="/write"  element = {user ? <Write /> : <Register/>}/>
          <Route path="/settings" element={user ? <Settings /> : <Register/>} />
          <Route path='/blog/:id' element={<Blog/>} />
      </Routes>

      {/*<Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
      </Routes> */}
    </div>
  );

export default App;