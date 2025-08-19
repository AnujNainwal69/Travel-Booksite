import React from "react";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      query: e.target.query.value
    };

    await fetch("https://script.google.com/macros/s/AKfycbxSXYJwxX-WcNi93nccP45YPjsjIRxXA5rtoOlVTSbPVVNzjw_pkY_lVKQLc2Cqwhtk/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert("Form submitted successfully!");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 mt-30 mb-5 ">
        
        {/* Left Illustration */}
        <div className="w-1/2">
          <img
            src="/contactus.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1  max-w-lg ml-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="query"
              placeholder="Your Query"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/7310711576"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-10 h-10"
  
        />
      </a>
    </div>
  );
}
