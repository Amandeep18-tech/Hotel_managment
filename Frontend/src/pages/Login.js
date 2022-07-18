import Style from './index.css'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { reset, login } from "../redux/authSlice";
import { Button, Input, Spin, Typography } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dataHandle = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      // toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spin size="large" />
  }

  return (
    <section className='section'>
      <section className="section">
        <Title> Log In </Title>
        <Text>Login into account</Text>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
        <Input.Group size="large">
            <Input
              style={{marginTop:'2%'}}
              type="type"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={dataHandle}
            />
            <Input
              style={{marginTop:'2%'}}
              type="type"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={dataHandle}
            />
          </ Input.Group>
          <div className='form-group'>
            <Button type='primary' style={{marginTop:'2%'}} className='section'>Submit</Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Login;
