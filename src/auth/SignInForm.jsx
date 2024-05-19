
import { Button, Checkbox, Form, Input } from 'antd';
import LinkTag from '../components/LinkTag';
import CustomGoalButton from '../components/CustomGoalButton';
import { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';
import { GlobalContext } from "../context/AuthProvider"


const SignInForm = () => {
  const { setReload } = useContext(GlobalContext);

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const register  = () => {
    navigate("/register");
  }

  
  const signinUser = async (e) => {
    // e.preventDefault()
    const {email, password} = data;
    try {
      const {data} = await axios.post('/login',{
        email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        toast.success('Logged In Successful!');
        setReload(prev => !prev)
        // toast.success('Refresh the Page');
        navigate('/redirect')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = (values) => {
    signinUser();
  // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
  // console.log('Failed:', errorInfo);
  };


  return(
    <main>
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
          label="Email"
          name="username"
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
        <div className=' flex gap-5 pl-10'>
          <LinkTag text="Sign Up" route={register}/>
          <CustomGoalButton text="Log In" htmlType="submit"/>
        </div>
        </Form.Item>
      </Form>
  </main>
  );
}
export default SignInForm;