import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const ChatPage = () => {
  const { docId } = useParams();
  const { backendUrl } = useContext(AppContext);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetch messages on load
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/chat/${docId}`);
        setMessages(res.data.data);
      } catch (err) {
        console.error('Error fetching chat:', err);
      }
    };

    fetchMessages();
  }, [docId, backendUrl]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { doctorId: docId, sender: 'user', message: input };

    try {
      const res = await axios.post(`${backendUrl}/api/chat/send`, newMsg);
      setMessages([...messages, res.data.data]);
      setInput('');
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Message failed to send.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Live Chat with Doctor</h2>

      <div className="border rounded p-4 bg-white shadow-md h-[60vh] overflow-y-auto">
        {messages.length ? (
          messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className="inline-block bg-blue-100 px-4 py-2 rounded text-sm">{msg.message}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Start typing to begin the chat...</p>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 border px-4 py-2 rounded shadow-sm focus:outline-none"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-primary text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
