import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";
import { useMediaQuery, useTheme } from '@mui/material';

const Contact = () => {
  const { selectedColor } = useContext(ThemeContext);
  const { register, handleSubmit, reset } = useForm();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to send email using EmailJS
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_p8f00sa", // Replace with your EmailJS service ID
        "template_l1n7fn5", // Replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "AfWpLei30L8WDJsfV" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          reset(); // Reset form fields
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row p-6 md:p-12">
      {/* Left Section */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 mt-[100px]">
        <h2 className="text-4xl font-bold">
          Get in <span style={{ color: selectedColor }}> touch</span>
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas, or opportunities to be part of your visions.
        </p>

        {/* Contact Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white"
              style={{ backgroundColor: selectedColor }}
            >
              <FiMail />
            </div>
            <p className="ml-4">
              Mail me: <br />
              <span className="text-gray-300">achantatarak@gmail.com</span>
            </p>
          </div>
          <div className="flex items-center">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white"
              style={{ backgroundColor: selectedColor }}
            >
              <FiPhone />
            </div>
            <p className="ml-4">
              Call me: <br />
              <span className="text-gray-300">+91 8008434124</span>
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:scale-110 transition"
            style={{ color: selectedColor }}>
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:scale-110 transition"
            style={{ color: selectedColor }}>
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:scale-110 transition"
            style={{ color: selectedColor }}>
            <FaYoutube />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:scale-110 transition"
            style={{ color: selectedColor }}>
            <FaDribbble />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className={`mt-[100px] ${isMobile ? "" : "ml-[100px]"}`}>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2"
            />
            <input
              type="text"
              placeholder="Your Subject"
              {...register("subject", { required: true })}
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", { required: true })}
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center px-6 py-3 rounded-full text-white shadow-md transition hover:scale-105"
            style={{ backgroundColor: selectedColor }}
          >
            Send Message
            <FiSend className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
