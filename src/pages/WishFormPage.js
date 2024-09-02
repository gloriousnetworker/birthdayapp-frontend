import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function WishFormPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState('Friend'); // State to hold the name for the modal
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      toast.error('Please enter a birthday wish/message.');
      return;
    }

    try {
      // Show toast notification
      toast.success('Birthday Wish Sent Successfully!');

      // Send the form data to the backend
      const response = await fetch('https://birthday-wishapp-backend.vercel.app/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Use the name directly for the modal
      setModalName(name || 'Friend');

      // Show modal after successful submission
      setShowModal(true);

      // Reset form fields
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting wish:', error.message);
      toast.error('Failed to submit birthday wish');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded shadow-md w-full max-w-md md:max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Your Birthday Wish</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your name (optional)"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Birthday Wish/Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your message or wish"
              rows="4"
              required
            ></textarea>
            {/* On-touch validation */}
            {message.trim() === '' && (
              <p className="text-red-500 text-sm mt-1">Message is required.</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit Wish
          </button>
        </form>

        {/* Toaster for notifications */}
        <Toaster position="top-center" />

        {/* Appreciation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md md:max-w-lg max-h-[90vh] overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Dear {modalName},</h2>
              <p className="mb-4">
                Thank you for the wonderful birthday wishes! I'm so grateful for God's faithfulness this past year; it has been incredibly productive. I'm excited to share that the app you're using to send your messages was designed by me, with the hope of receiving your love and support. Your kindness means the world to me, and I'm blessed to have a friend like you.
              </p>
              <p className="font-bold mb-4">With heartfelt thanks,</p>
              <p className="font-bold">Glorious Udofot (Udofot.tsx)</p>
              <div className="flex space-x-4">
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

                <button
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                  onClick={() => navigate('/album')}
                >
                  Album
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishFormPage;
