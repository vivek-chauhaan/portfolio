"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log(formData);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-4">
        Get In Touch
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Form */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="enter you name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email here.."
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <button className="bg-gradient-to-r cursor-pointer from-green-400 to-cyan-400 text-black font-medium py-2 rounded-md hover:from-green-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Contact Info */}

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4 text-gray-300 text-sm">
              {/* Email */}
              <a
                href="mailto:vivekchauhan1181@gmail.com"
                className="flex items-start gap-3 hover:text-green-400 transition"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green-400 text-2xl mt-1"
                />
                <div>
                  <p className="text-lg tracking-wide text-gray-400">Email</p>
                  <span>vivekchauhan1181@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vivek-chauhan973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-cyan-400 transition"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-cyan-400 text-2xl mt-1"
                />
                <div>
                  <p className="text-lg tracking-wide text-gray-400">
                    LinkedIn
                  </p>
                  <span>linkedin.com/in/vivek-chauhan973</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vivek-chauhaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-pink-400 transition"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-pink-400 text-2xl mt-1"
                />
                <div>
                  <p className="text-lg tracking-wide text-gray-400">GitHub</p>
                  <span>github.com/vivek-chauhaan</span>
                </div>
              </a>
            </div>
          </div>

          {/* Let's Connect Box */}

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Let’s Connect
            </h3>
            <p className="text-gray-400 text-[15px] mb-4">
              Interested in collaborating or have a project in mind? I’m always
              open to discussing new opportunities and ideas.
            </p>
            <div className="flex gap-4 text-xl text-gray-400">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vivek-chauhan973"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vivek-chauhaan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              {/* Email */}
              <a
                href="mailto:chauhanvivek65652@gmail.com"
                className="hover:text-green-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
