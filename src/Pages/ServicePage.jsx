import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Char Dham Tour Packages",
    points: [
      "Hassle-free premium Char Dham Yatra services.",
      "Cabs, hotels, and custom pilgrimage packages available.",
      "Safe, smooth, and memorable Himalayan journeys guaranteed.",
    ],
  },
  {
    title: "Hotel & Accommodation Booking",
    points: [
      "Premium accommodations.",
      "Comfortable stays for individuals and groups.",
      "Customizable lodging solutions near pilgrimage sites.",
    ],
  },
  {
    title: "Cab & Transportation Services",
    points: [
      "Reliable cab services for seamless travel.",
      "Comfortable, safe journeys with professional drivers.",
      "Customized transportation options for all itineraries.",
    ],
  },
];

const ServicePage = () => {
  return (
    <main>
      <section className="pt-20">
        <div className="bg-white pb-10">
          <h1 className="text-4xl font-bold flex justify-center p-6 bg-emerald-800 text-white">
            Our Services
          </h1>

          <div className="container mx-auto space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-emerald-50 m-8 rounded-xl shadow-lg`}
              >
                {/* Text */}
                <div
                  className={`p-6 leading-8 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
                    <CheckCircle className="text-emerald-600" /> {service.title}
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-emerald-600 w-5 h-5 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div>
                  <img
                    src="kedarnath.jpg"
                    alt="Service"
                    className="rounded-xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
