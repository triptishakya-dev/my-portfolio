"use client";
 import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";



const ContactPage = () => {
  

 


const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

 const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/contact", formData); 
    console.log("✅ Message sent:", response.data);
    toast.success('Thank You for contacting!');

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("❌ Error sending message:", error);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Contact Us</h1>

        {/* Static Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 mb-1">
            📞 <strong>Phone:</strong><a href="tel:+6201414631" className="text-indigo-600 hover:underline">+91 6201414631</a>
          </p>
          <p className="text-gray-700">
            📧 <strong>Email:</strong> <a href="triptishakya.2001@gmail.com" className="text-indigo-600 hover:underline">triptishakya.2001@gmail.com</a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-black ">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
