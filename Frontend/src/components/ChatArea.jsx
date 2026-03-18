import { Phone, Video, EllipsisVertical, Plus, Smile, SendHorizontal } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader';

export const messages = [
  {
    id: "msg1",
    senderId: "user1",
    receiverId: "user2",
    message: "Hey, how are you?",
    time: "10:30 AM",
    seen: true,
  },
  {
    id: "msg2",
    senderId: "user2",
    receiverId: "user1",
    message: "I'm good! What about you?",
    time: "10:32 AM",
    seen: true,
  },
  {
    id: "msg3",
    senderId: "user1",
    receiverId: "user2",
    message: "Doing great, working on a chat app 😄",
    time: "10:33 AM",
    seen: true,
  },
  {
    id: "msg4",
    senderId: "user2",
    receiverId: "user1",
    message: "Nice! Sounds interesting 🚀",
    time: "10:35 AM",
    seen: false,
  },
  {
    id: "msg5",
    senderId: "user1",
    receiverId: "user2",
    message: "Yeah, adding real-time features now hello nice message from you its really nice.",
    time: "10:36 AM",
    seen: false,
  },
  {
    id: "msg6",
    senderId: "user2",
    receiverId: "user1",
    message: "Let me know when it's done!",
    time: "10:38 AM",
    seen: false,
  },
  {
    id: "msg7",
    senderId: "user1",
    receiverId: "user2",
    message: "Let me know when it's done!",
    time: "10:38 AM",
    seen: false,
  },
];

const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
  "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚",
  "😙", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫",
  "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬",
  "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢",
  "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "🥸",
  "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲",
  "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱",
  "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠",
  "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻",
  "👽", "👾", "🤖", "💫", "💥", "✨", "🌟", "⚡", "🔥", "💥",
  "🌈", "☀️", "🌤", "⛅", "🌥", "☁️", "🌧", "⛈", "🌩", "🌨",
  "❄️", "⛄", "💧", "🌊", "🎃", "🎄", "🎅", "🎁", "❤️", "🧡",
  "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💯", "✅", "✔️",
  "❌", "‼️", "❗", "❓", "💬", "💭", "🕊", "🌹", "🔥", "🌺"
];

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='relative bg-[#151B29] h-screen w-full  flex flex-col overflow-hidden'>
      <ChatHeader />
      {/* messages */}
      <div ref={messagesContainerRef} className='flex-1 p-5 overflow-y-auto mt-5 flex flex-col gap-4'>
        {messages.map((msg) => {
          const isMe = msg.receiverId === "user1"
          return (
            <div key={msg.id} className={`flex  gap-2 items-center ${isMe ? "self-end" : "self-start"}`}>
              {isMe && <img className='rounded-full w-9 h-9 mt-3 object-cover' src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />}
              <div className={` ${isMe ? "bg-blue-500" : "bg-[#2A3549]"} outfit-300 flex gap-2 text-white p-3 rounded-lg mt-2 max-w-lg break-words`}>
                <p>{msg.message}</p>
                <p className='text-white/60'>{msg.time}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* message input */}
      <div className='h-20 bg-[#171E2E] border-[1.5px] border-gray-700  flex items-center gap-5 px-5'>
        <div className='w-12 h-12 bg-[#222A37] hover:text-gray-300 transition-all rounded-xl border border-gray-700 flex justify-center items-center text-gray-500'><Plus size={32} /></div>
        {showEmojiPicker &&
          <div className='absolute bottom-[70px] left-[90px] bg-[#171E2E] border border-gray-700 rounded-xl p-3 '>
            <div className='h-52 overflow-y-auto grid grid-cols-8 gap-2'>
              {emojis.map((emoji, index) => (
                <button key={index} onClick={() => {
                  setMessage(prev => prev + emoji);
                  setShowEmojiPicker(false);
                }} className='text-2xl hover:bg-gray-600 rounded-full p-1'>
                  {emoji}
                </button>
              ))}
            </div>
          </div>}
        <Smile onClick={() => { setShowEmojiPicker(!showEmojiPicker) }} size={28} className='text-gray-400 hover:text-white transition-all' />
        <div className='flex-1 h-14 bg-[#222A37] rounded-xl border border-gray-700 flex items-center px-1 pl-3'>
          <input ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} className='bg-transparent outline-none w-full text-md text-gray-300' type="text" placeholder='Type a message...' />
          <button  className='bg-blue-500 text-white hover:bg-blue-600 transition-all p-3 rounded-lg ml-3'><SendHorizontal fill='white' size={24} /></button>
        </div>
      </div>
    </div>
  )
}

export default ChatArea
