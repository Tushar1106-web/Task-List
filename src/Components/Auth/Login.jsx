import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from "../../Redux-toolkit/Slices/AuthSlice";

const Login = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState({
    email:'test@example.com',
    password: 'test123'
  })
  const navigate = useNavigate()
  const handleChnage =(event) =>{
    const {name,value} = event.target;
    setData({...data,[name]:value});
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    // handle form submission here
    console.log(data);
    const {email,password} = data;
    if(email ==='test@example.com' && password ==='test123'){
      dispatch(login())
      alert('Login Successful');
      navigate('/home');
    }else{
      alert('Invalid Credentials');
    }
  }
  return (
    <div>
      {/* <!-- component --> */}
     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
        </div>
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input autoComplete="off" value={data.email} onChange={handleChnage} id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Email Address
              </label>
            </div>
            <div className="relative">
              <input autoComplete="off" id="password" value={data.password} onChange={handleChnage} name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Password
              </label>
            </div>
            <div className="relative">
              <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Login;
