import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import ContactImage from '../assets/contact-us.png'; // Add your image path here
import { Link } from 'react-router-dom'; // Import Link for navigation

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/send-email-me`, formData);
      console.log('Response:', response.data);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container bg-gradient-to-br from-[#f4f6ff] to-[#ffffff] min-h-screen flex justify-center items-center p-8">
      <div className="contact-content-container flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Left Column: Form */}
        <div className="form-container p-8 lg:w-1/2">
          <h1 className="text-4xl font-bold text-[#2f4f4f] text-center mb-6">Get in Touch</h1>
          <p className="text-lg text-center text-[#666] mb-8">We’d love to hear from you. Fill out the form below to contact us.</p>
          <form onSubmit={handleOnSubmit} className="contact-form flex flex-col gap-6">
            <TextField
              id="name"
              label="Your Name"
              variant="outlined"
              style={{ margin: '0' }}
              name="name"
              required
              onChange={handleOnChange}
              value={formData.name}
              className="input-field"
              inputProps={{ style: { padding: '15px' } }}
            />
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              style={{ margin: '0' }}
              name="email"
              type="email"
              required
              onChange={handleOnChange}
              value={formData.email}
              className="input-field"
              inputProps={{ style: { padding: '15px' } }}
            />
            <TextField
              id="message"
              label="Your Message"
              variant="outlined"
              style={{ margin: '0' }}
              name="message"
              multiline
              rows={4}
              required
              onChange={handleOnChange}
              value={formData.message}
              className="input-field"
              inputProps={{ style: { padding: '15px' } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                margin: '1rem 0',
                backgroundColor: '#183354',
                textTransform: 'none',
                fontSize: '16px',
                padding: '12px 20px',
                borderRadius: '8px',
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Adding the Link under the form */}
          <div className="text-center mt-4">
            <p className="text-sm text-[#2f4f4f]">
              By sending this message, you agree to our{' '}
              <Link to="/privacy-policy" className="text-[#00aaff] underline hover:text-[#0077cc]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="image-container lg:w-1/2 flex justify-center items-center bg-[#f7f7f7] rounded-r-xl p-6">
          <img
            src={ContactImage}
            alt="Contact Us"
            className="w-full h-auto max-w-[400px] rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
