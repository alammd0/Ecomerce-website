import React from 'react'
import logo from "../asset/logo.svg"
import { useState } from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const [errors, setErrors] = useState({ email: '', password: '' });


  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Handle form submission


      console.log('Form submission');
      console.log(formData)

      navigate("/")
    }
  };



  return (
    <div className='absolute top-24 left-[35%] items-center flex flex-col justify-center bg-gray-500 w-[600px] h-[600px] rounded-md'>
      <div className='flex flex-col items-center justify-center'>
        <img src={logo} alt='logo' />

        <p>Welcome To Bazaar</p>
      </div>

      <form className=" w-[80%]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">

          <label htmlFor='email' className="text-lg text-cyan-200">Email or Phone Number </label>


          <input
            type='email'
            name='email'
            placeholder='example@example.com'
            value={formData.email}
            className={`bg-gray-400 py-1 rounded-sm mb-1 border ${errors.email ? 'border-red-600' : 'border-gray-300'
              } hover:border-red-700 focus:border-red-600`}
            id='Email'
            onChange={changeHandler}
            required
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}


        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor='email' className="text-lg text-cyan-200">Email or Phone Number </label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formData.password}
            className={`bg-gray-400 py-1 rounded-sm mb-1 border ${errors.password ? 'border-red-600' : 'border-gray-300'
              } hover:border-red-700 focus:border-red-600`}
            id='Password'
            onChange={changeHandler}
            required
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>

        <button type='submit' className="text-white py-2 px-4 rounded-sm w-full my-4 bg-red-700">
          Login
        </button>
      </form>

      <div className='text-yellow-300 text-2xl p-4'>
        or
      </div>


      <div className='w-[80%]'>
        <button className="text-white py-2 px-4 rounded-sm w-full my-4 bg-blue-600">
          <a href='/' className='flex items-center justify-center'>
            <p className='flex items-center justify-center space-x-2'>
              <AiFillGoogleCircle />
              <span>Continue With Google</span>
            </p>
          </a>
        </button>

        <button className="text-white py-2 px-4 rounded-sm w-full my-4 bg-blue-950">
          <a href='/' className='flex items-center justify-center'>
            <p className='flex items-center justify-center space-x-2'>
              <FaFacebook />
              <span>Continue With Facebook</span>
            </p>
          </a>
        </button>

        <div className='flex items-center justify-center text-xl gap-2 text-cyan-400'>
          Don't have account?
          <Link to="/signup" className=' text-slate-400 underline'>Register</Link>
        </div>


      </div>



    </div>
  )
}

export default Login
