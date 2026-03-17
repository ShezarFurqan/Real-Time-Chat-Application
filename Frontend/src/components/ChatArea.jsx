import { Phone, Video, EllipsisVertical  } from 'lucide-react'
import React from 'react'

const ChatArea = () => {
  return (
    <div className='bg-[#151B29] h-screen w-full p-5'>
      <div className='bg-[#1F2738] flex justify-between items-center border-gray-700 shadow-2xl rounded-xl h-24 border-[1.5px] w-full'>
        <div className='flex items-center gap-4 h-full px-5'>
          <div className='relative'>
            <img className='rounded-full w-16 h-16 object-cover' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className='absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-[#1D2537]'></div>
          </div>
          <div>
            <h1 className='text-[20px] leading-6 outfit-500 text-white'>John Doe</h1>
            <p className='text-lg  outfit-400 text-gray-400'>Online</p>
          </div>
        </div>
        <div className='flex gap-7 mr-8 text-[#97A0AF]'>
          <Phone fill='#97A0AF' size={30}/>
          <Video fill='#97A0AF' size={30} />
          <EllipsisVertical fill='#97A0AF' size={30} />
        </div>
      </div>

    </div>
  )
}

export default ChatArea
