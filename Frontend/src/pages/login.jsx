import { Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'

const login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {  
    e.preventDefault()
    if(isLogin) {
      // login logic
    } else {
      // signup logic
    }
   }

  return (
    <div className='bg-[#192030] outfit-500 h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-[600px] h-fit py-16 bg-[#20293A] border border-gray-700 rounded-2xl'>
        <h1 className='text-gray-400 outfit-400 text-2xl'>{isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE YOUR ACCOUNT'}</h1>
        <form onSubmit={onSubmitHandler} className='mt-8 gap-6 flex flex-col justify-center items-center'>
          {/* Username */}
          {
            !isLogin && <div className='group relative flex w-96 border border-gray-400 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 rounded-xl text-gray-400 text-lg px-5 py-3 items-center gap-3 transition-all duration-300 bg-[#20293A]'>
              <User size={28} />
              <input 
                placeholder='Enter Your Username' 
                className='outline-none focus:outline-none border-none' 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className='absolute group-focus-within:text-green-500 transition-colors duration-300 -top-4 left-13 bg-[#20293A] text-[16px] py-1 px-2'>Username</div>
            </div>
            }
          {/* email */}
          <div className='group relative flex w-96 border border-gray-400 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 rounded-xl text-gray-400 text-lg px-5 py-3 items-center gap-3 transition-all duration-300 bg-[#20293A]'>
            <Mail size={28} />
            <input 
              placeholder='Enter Your Email Address' 
              className='outline-none focus:outline-none border-none' 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='absolute group-focus-within:text-green-500 transition-colors duration-300 -top-4 left-13 bg-[#20293A] text-[16px] py-1 px-2'>Email Address</div>
          </div>
          {/* password */}
          <div className='group relative flex w-96 border border-gray-400 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 rounded-xl text-gray-400 text-lg px-5 py-3 items-center gap-3 transition-all duration-300 bg-[#20293A]'>
            <Lock size={28} />
            <input 
              placeholder='Enter Your Password' 
              className='outline-none focus:outline-none border-none' 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='absolute group-focus-within:text-green-500 transition-colors duration-300 -top-4 left-13 bg-[#20293A] text-[16px] py-1 px-2'>Password</div>
          </div>
          <button className='w-96 py-3 text-white bg-blue-600 flex justify-center items-center rounded-xl shadow-lg '>{isLogin ? 'LOG IN' : 'SIGN UP'}</button>
          <span className='flex justify-center cursor-context-menu items-center gap-1 text-gray-500 outfit-500 text-lg'>{isLogin ? "Don't have an account?" : "Already have an account?"} <a onClick={()=>{setIsLogin(!isLogin)}} className='text-blue-500 hover:underline cursor-pointer'> {isLogin ? 'Sign up' : 'Log in'}</a></span>
        </form>
      </div>
    </div>
  )
}

export default login
