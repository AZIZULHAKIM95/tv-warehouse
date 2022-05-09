import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyItems from './Pages/Home/MyItems/MyItems';
import ManageItems from './Pages/Home/ManageItems/ManageItems';
import AddItem from './Pages/Home/AddItem/AddItem';
import Inventories from './Pages/Home/Inventories/Inventories';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems />
            </RequireAuth>
        }></Route>

        <Route path='/inventories' element={
          <RequireAuth>
            <Inventories />
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;