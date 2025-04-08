import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white glow-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-900/50 p-3 rounded-full text-cyan-400 border border-cyan-500/30 glow">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Email</h4>
                <a
                  href="mailto:hello@johndoe.dev"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  hello@johndoe.dev
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-900/50 p-3 rounded-full text-cyan-400 border border-cyan-500/30 glow">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-900/50 p-3 rounded-full text-cyan-400 border border-cyan-500/30 glow">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">Location</h4>
                <p className="text-gray-300">San Francisco, California</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-lg mb-4 text-white">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-500/30"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-500/30"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="bg-slate-800 p-3 rounded-full text-gray-300 hover:bg-cyan-900/50 hover:text-cyan-400 transition-colors border border-slate-700 hover:border-cyan-500/30"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <div>
                  <h4 className="font-semibold text-green-400">
                    Message Sent!
                  </h4>
                  <p className="text-green-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white"
                    placeholder="I'd like to discuss a project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all ${
                    isSubmitting
                      ? "bg-purple-500/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
