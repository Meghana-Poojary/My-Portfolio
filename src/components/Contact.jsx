import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <section
        id="contact"
        className="max-w-4xl mx-auto mt-16 px-4 text-center relative z-10 scroll-mt-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Get in Touch
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendMessage}
          className="shiny-border max-w-lg mx-auto rounded-xl shadow-lg p-8 border border-transparent"
        >
          {/* Name Field */}
          <div className="relative z-10 mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative z-10 mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative z-10 mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message here..."
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative z-10 w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
