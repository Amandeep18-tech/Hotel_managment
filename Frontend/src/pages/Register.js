import './index.css'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from 'react-toastify';
import { register, reset } from "../redux/authSlice";

import { Spin, Typography, Input, Space, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

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

  const dataHandle = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password
    }

    dispatch(register(userData))
  }


  const onClick = ({ key }) => {
    
  };
  
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'What is your favorite color?',
          key: '1',
        },
        {
          label: 'what is your favorite movie?',
          key: '2',
        },
        {
          label: 'what is your favorite sport?',
          key: '3',
        },
      ]}
    />
  );

  if (isLoading) {
    return <Spin size='large' />
  }

  return (
    <section className='section'>
      <section className='section' style={{width:'50%'}}>
        <Title> Register  </Title>
        <Text>Please create an account</Text>
      </section>
      <Space direction="vertical">
        <section className="form">
          <form onSubmit={onSubmit}>
            <Input.Group size="large">
              <Input
                style={{ margin: '2%' }}
                size="large"
                type="type"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={dataHandle}
              />
              <Input
                style={{ margin: '2%' }}
                size="large"
                type="type"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={dataHandle}
              />
              <Input
                style={{ margin: '2%' }}
                size="large"
                type="type"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={dataHandle}
              />  
            </Input.Group>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{width:'70%'}}>
                 Select security Question
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Button className='section' type='primary'>Submit</Button>
          </form>
        </section>
      </Space>
    </section>
  );
};

export default Register;
