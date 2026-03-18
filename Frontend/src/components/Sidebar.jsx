import { Search, UserRoundPen } from 'lucide-react'
import React, { useState } from 'react'
import MessageCard from './MessageCard';
import EditProfile from './EditProfile';


// contacts.js
const contacts = [
    {
        id: 1,
        username: "Ali Khan",
        profileImage: "https://i.pravatar.cc/50?img=1",
        status: "online",
        lastMessage: "Hey, are you there?",
        unseen: 2,
    },
    {
        id: 2,
        username: "Sara Ahmed",
        profileImage: "https://i.pravatar.cc/50?img=2",
        status: "offline",
        lastMessage: "Got your message!",
        unseen: 0,
    },
    {
        id: 3,
        username: "Bilal Shah",
        profileImage: "https://i.pravatar.cc/50?img=3",
        status: "online",
        lastMessage: "Let's meet tomorrow.",
        unseen: 1,
    },
    {
        id: 4,
        username: "Mayan Chen",
        profileImage: "https://i.pravatar.cc/150?img=5",
        status: "online",
        lastMessage: "Let's meet tomorrow.",
        unseen: 1,
    },
    {
        id: 4,
        username: "Mayan Chen",
        profileImage: "https://i.pravatar.cc/150?img=5",
        status: "online",
        lastMessage: "Let's meet tomorrow.",
        unseen: 1,
    },
    {
        id: 4,
        username: "Mayan Chen",
        profileImage: "https://i.pravatar.cc/150?img=5",
        status: "online",
        lastMessage: "Let's meet tomorrow.",
        unseen: 1,
    },
    {
        id: 4,
        username: "Mayan Chen",
        profileImage: "https://i.pravatar.cc/150?img=5",
        status: "online",
        lastMessage: "Let's meet tomorrow.",
        unseen: 1,
    },
];


const Sidebar = () => {
    const [openEditProfile, setOpenEditProfile] = useState(false);


    return (
        <div className='border-gray-700 border-[1.5px] w-96 flex-shrink-0 p-5 h-screen flex flex-col bg-gradient-to-r from-[#1E2738] to-[#1E2738]'>
            {/* profile status */}
            <div className='flex w-full h-fit py-6 px-8 items-center border-[1.5px] border-gray-700 shadow-2xl rounded-xl'>
                <div className='relative'>
                    <img className='rounded-full w-20 h-20 object-cover' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
                    <div className='absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-[#1D2537]'></div>
                </div>
                <div>
                    <h2 className='text-lg outfit-700 text-white ml-4'>John Doe</h2>
                    <p className='text-[14px] outfit-300 text-gray-400 ml-4'>Status: Online</p>
                </div>
                <UserRoundPen onClick={() => { setOpenEditProfile(true) }} size={24} className='text-gray-400 ml-auto cursor-pointer hover:text-white' />
            </div>
            {/* search */}
            <div className='flex items-center gap-3 mb-8 text-lg outfit-500 bg-[#1B2330] rounded-lg border-[1.5px] p-3 outline-none focus-within:ring-2 focus-within:ring-blue-500 border-gray-700 w-full h-fit mt-6 relative '>
                <Search size={25} className='text-gray-400' />
                <input
                    type="text"
                    placeholder="Search People, Groups..."
                    className="border-none text-gray-400 placeholder:text-gray-500 border-[1.5px] border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600"
                />
            </div>
            {/* contacts list */}
            <div className='flex-1 overflow-y-auto '>
                {contacts.map((contact) => (
                    <MessageCard key={contact.id} contact={contact} />
                ))}
            </div>
            {/* edit profile modal */}
            {openEditProfile && <EditProfile setOpenEditProfile={setOpenEditProfile} />}
        </div>
    )
}

export default Sidebar
