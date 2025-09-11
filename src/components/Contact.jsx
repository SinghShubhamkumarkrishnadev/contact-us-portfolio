import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        setFeedback("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      },
      (error) => {
        setFeedback("Failed to send message. Try again.");
        setLoading(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <p className="text-gray-600 mb-10 px-4 sm:px-0">
          Interested in working together? Fill out the form below or connect with me on social media.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-4 sm:gap-6 bg-white shadow-lg rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition disabled:opacity-50 text-base sm:text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {feedback && <p className="text-green-600 mt-2 text-base">{feedback}</p>}
        </motion.form>

        <div className="flex justify-center space-x-6 mt-8 text-2xl text-gray-700">
          <a href="https://github.com/SinghShubhamkumarkrishnadev/SinghShubhamkumarkrishnadev/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/singh-shubhamkumar-krishnadev-b581952a9/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://x.com/SinghShubh66309/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
