
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext'; // Make sure this path is correct

const FeedbackPage = () => {
  const { docId } = useParams();
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const { backendUrl } = useContext(AppContext); // removed token
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(`${backendUrl}/api/feedback/submit`, {
        doctorId: docId,
        userName,
        comment
      });

      alert('Feedback submitted successfully!');
      navigate(`/appointment/${docId}`);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className='p-4 max-w-xl mx-auto'>
      <h2 className='text-xl font-bold mb-2'>Submit Feedback</h2>
      <input
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Your Name"
        className='w-full mb-2 p-2 border rounded'
      />
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Your Feedback"
        className='w-full p-2 border mb-4 rounded'
        rows={4}
      />
      <button
        onClick={handleSubmit}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
      >
        Submit
      </button>
    </div>
  );
};

export default FeedbackPage;
