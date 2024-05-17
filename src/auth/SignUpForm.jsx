

import { Button, Checkbox, Form, Input } from 'antd';
import LinkTag from '../components/LinkTag';
import CustomGoalButton from '../components/CustomGoalButton';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';


const SignUpForm = () => {

  const goals_array = [];
  const navigate = useNavigate();
  const [data, setData] = useState({
    name:'',
    email: '',
    password: ''
  });

  const login  = () => {
    navigate('/login');
  }
  
  const registerUser = async (e) => {
    // e.preventDefault()
    const {name, email, password} = data;
    // goals_array.push(`${email}`)
    try {
      const {data} = await axios.post('/signup',{
        name, email, password, goals_array
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        toast.success('Registration Successful! You can Login Now');
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = (values) => {
    registerUser();
  console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  };


  return(
    <section>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={(e) => {setData({...data, name: e.target.value})}} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input onChange={(e) => {setData({...data, email: e.target.value})}} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => {setData({...data, password: e.target.value})}} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button> */}
          <div className=' flex gap-5 pl-10'>
            <LinkTag text="Sign In" route={login}/>
            <CustomGoalButton text="Sign Up" htmlType="submit"/>
          </div>
        </Form.Item>
      </Form>
  </section>
  );
};
export default SignUpForm;