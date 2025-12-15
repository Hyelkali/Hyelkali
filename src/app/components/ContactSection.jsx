'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Twitter, Linkedin } from 'lucide-react';

// A simple WhatsApp icon component
const WhatsApp = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default function ContactSection({ isDark }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setSubmitStatus('success');
      e.target.reset(); // Clear form
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`${isDark ? "text-gray-500" : "text-gray-600"} uppercase tracking-wider text-sm mb-4`}>
            GET IN TOUCH
          </p>
          <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? "text-white" : "text-black"}`}>Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                Let's Work Together
              </h3>
              <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"} mb-8`}>
                With 65+ completed projects, I craft beautiful web experiences using React, modern web technologies,
                and creative design solutions. Ready to bring your vision to life?
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hyelnamuninathan@gmail.com" },
                { icon: Phone, label: "Phone", value: "09030107976" },
                { icon: MessageCircle, label: "Telegram", value: "09030107976" },
                { icon: Github, label: "GitHub", value: "github.com/Hyelkali" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${isDark ? "bg-white/10" : "bg-black/10"} flex items-center justify-center group-hover:bg-purple-500/20 transition-colors backdrop-blur-sm`}
                  >
                    <contact.icon
                      className={`h-5 w-5 ${isDark ? "text-white" : "text-black"} group-hover:text-purple-400`}
                    />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{contact.label}</p>
                    <p
                      className={`font-medium ${isDark ? "text-white" : "text-black"} group-hover:text-purple-400 transition-colors`}
                    >
                      {contact.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4 pt-6">
              {[
                { icon: Twitter, href: "https://x.com/Hyelkali", label: "Twitter" },
                { icon: WhatsApp, href: "https://api.whatsapp.com/send?phone=2348147865084", label: "WhatsApp" },
                { icon: Telegram, href: "https://t.me/@HyelKali", label: "Telegram" },
                { icon: Github, href: "https://github.com/Hyelkali", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/hyelnamun-nathan-0317a3224", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/10 hover:bg-black/20"} flex items-center justify-center transition-colors backdrop-blur-sm`}
                >
                  <social.icon className={`h-5 w-5 ${isDark ? "text-white" : "text-black"}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl rounded-2xl p-8 border ${isDark ? "border-white/20" : "border-black/20"} shadow-2xl`}
            style={{
              background: isDark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
            }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? "bg-white/10 border-white/20 text-white placeholder-gray-400" : "bg-black/10 border-black/20 text-black placeholder-gray-600"} border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? "bg-white/10 border-white/20 text-white placeholder-gray-400" : "bg-black/10 border-black/20 text-black placeholder-gray-600"} border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? "bg-white/10 border-white/20 text-white placeholder-gray-400" : "bg-black/10 border-black/20 text-black placeholder-gray-600"} border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  placeholder="Project Discussion"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? "text-white" : "text-black"}`}>
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className={`w-full px-4 py-3 rounded-lg ${isDark ? "bg-white/10 border-white/20 text-white placeholder-gray-400" : "bg-black/10 border-black/20 text-black placeholder-gray-600"} border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
