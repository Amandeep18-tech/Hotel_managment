import 'antd/dist/antd.min.css'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header className='container' />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;