import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatArea from '../components/ChatArea'

const Home = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <div className="flex-1 "> 
         <ChatArea />
      </div>
    </div>
  )
}

export default Home
