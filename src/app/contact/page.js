"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="container">
      <div className="p-6 bg-slate-300 rounded-2xl">
        <div className="max-w-lg mx-auto p-6">
              <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <input
                  className="w-full p-2 border rounded"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <textarea
                  className="w-full p-2 border rounded"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  type="submit"
                >
                  Send
                </button>
              </form>
              {status && <p className="mt-4">{status}</p>}
        </div>
      </div>
      
    </div>
    
  );
}
