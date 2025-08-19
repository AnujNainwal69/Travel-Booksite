import React from "react";
import { useBooking } from "../Context/BookingContext";

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();

  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/tourists-with-bags-illustration-download-in-svg-png-gif-file-formats--friends-travel-vacation-backpackers-pack-people-illustrations-5454894.png"
            alt="Book Your Trip"
            className="h-40"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-4">Book Your Trip</h2>

        {/* Call Button */}
        <a
          href="tel:+917310711576"
          className="w-full block text-center bg-green-600 text-white py-3 rounded-lg mb-3 hover:bg-green-700 transition"
        >
          📞 Call Us
        </a>

        {/* Email Button */}
        <a
          href="mailto:info@explorecase.in"
          className="w-full block text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
        >
          📧 Email Us at info@explorecase.in
        </a>
      </div>
    </div>
  );
}
