import React from 'react'

const MessageCard = ({ contact }) => {
    return (
        <div className='rounded-xl h-fit py-3 px-3 flex items-center gap-5 hover:bg-gray-500/10 cursor-pointer transition-colors'>
            <div className='relative '>
                <img className='rounded-full w-12 h-12 object-cover' src={contact.profileImage} alt="" />
                <div className='absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-3 border-[#1D2537]'></div>
            </div>
            <div className='flex justify-between items-center flex-1'>
                <div className=''>
                    <h1 className='outfit-600 text-white '>{contact.username}</h1>
                    <p className='outfit-500 text-gray-500'>{contact.lastMessage}</p>
                </div>
                <div className='flex flex-col items-end gap-1'>
                    <h1 className='outfit-600 text-white'>2:15 PM</h1>
                    <div className='rounded-full flex justify-center items-center bg-blue-500 text-white text-xs w-5 h-5'>{contact.unseen}</div>
                </div>
            </div>
        </div>
    )
}

export default MessageCard
