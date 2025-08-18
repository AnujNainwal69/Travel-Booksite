import { FaUsers, FaShieldAlt, FaLeaf, FaHeadset, FaPlane, FaClock, FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <main>
      {/* About Us Header */}
      <section className="pt-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-10">
            At Peace Hub, our mission is to provide a hassle-free, safe, and spiritually enriching Char Dham Yatra experience. 
            We are dedicated to offering well-planned tours, reliable transportation, and comfortable accommodations, 
            ensuring that every pilgrim can focus on their spiritual journey without any worries.
          </p>

          {/* Mission Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <FaUsers size={24} />
              </div>
              <p className="text-gray-700">
                Make Char Dham travel accessible and convenient for all, including families, elderly pilgrims, and groups.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <FaShieldAlt size={24} />
              </div>
              <p className="text-gray-700">
                Ensure safety and comfort with trusted transport services and quality accommodations.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <FaHeadset size={24} />
              </div>
              <p className="text-gray-700">
                Deliver exceptional customer service with 24/7 support and personalized travel solutions.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <FaLeaf size={24} />
              </div>
              <p className="text-gray-700">
                Promote sustainable tourism by respecting local culture and the sacred environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">Why Choose Peace Hub?</h2>
          <p className="text-gray-700 mb-12">
            With Peace Hub, your pilgrimage is not just a trip — it’s a journey of faith, devotion, and unforgettable memories.
          </p>

          {/* Why Choose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaPlane className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Expert Travel Planning</h3>
              <p className="text-gray-600">
                Our team of experienced travel experts crafts the perfect itinerary for your spiritual journey.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Local Knowledge</h3>
              <p className="text-gray-600">
                Benefit from our deep understanding of the Char Dham region and its sacred sites.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaClock className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Time-Saving</h3>
              <p className="text-gray-600">
                We handle all the logistics, allowing you to focus on your spiritual experience.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our top priority, with carefully vetted accommodations and transport.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaStar className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Memorable Experiences</h3>
              <p className="text-gray-600">
                Create lasting memories with our thoughtfully curated spiritual journeys.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaHeart className="text-emerald-700 mb-4" size={28} />
              <h3 className="font-bold text-lg text-emerald-800">Personalized Service</h3>
              <p className="text-gray-600">
                Enjoy tailored support and assistance throughout your pilgrimage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
