import { useBooking } from "../Context/BookingContext";

const HomePage = () => {

  const { openModal } = useBooking();

  return (
    <main className="relative z-0">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="bg.jpg.jpg"
            alt="background"
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 text-center px-6 max-w-2xl ">
          <h1 className="text-6xl font-bold text-white mb-4">
            Give Yourself a
          </h1>
          <h1 className="text-7xl font-bold text-emerald-500 mb-4 ">
            New Adventure
          </h1>
          <p className="text-white mb-6 text-2xl">
            Enjoy unique travels and get a chance to explore destinations that
            feel beyond this world
          </p>
<<<<<<< HEAD
          <button className="p-2 bg-orange-400 mt-14  rounded-xl text-[#ffffff] inline-flex items-center justify-center hover:text-accent-foreground h-10 rounded-md px-8 text-black border-white hover:bg-white/10 animate-bounce text-2xl">
            Book Now 
=======
          <button onClick={openModal} className="p-2 bg-[#79f2f2b4] rounded-xl text-[#ffffff] inline-flex items-center justify-center hover:bg-[#72e5c6] animate-bounce text-2xl">
            Book Now
>>>>>>> 308466d142177827679b8289492123614e550a6e
          </button>
        </div>
      </section>

      <section>
        <div className="flex flex-col  m-8 p-4 items-center">
          <h2 className="text-3xl font-medium py-4">
            Why be late for Holy Char Dham Yatra When you book your adventure
            ticket just by a click!
          </h2>

          <p className="text-justify text-lg leading-7 text-[#2C3E50]">
            At PeaceHub, we specialize in crafting customized Char Dham packages
            that cater to individual, family, and group travel needs. We take
            care of all your travel requirements, including premium hotel
            bookings, reliable transportation, and helicopter bookings for
            Kedarnath, ensuring you get the most convenient and luxurious
            experience. Whether you want to reach Kedarnath via helicopter Yatra
            services or explore the Char Dham Yatra by road, we provide both
            options to suit your preference. Our services are designed to make
            your Char Dham Yatra 2025 seamless and spiritually enriching.
            <br />
            <br />
            1 . Personalized Char Dham Packages that are customized to your
            schedule, ensuring a tailored travel experience.
            <br />
            2 . Helicopter Yatra Services to Kedarnath, offering a convenient
            and scenic route for travelers looking to save time and experience
            the Himalayas from the sky.
            <br />
            3 . Premium Hotel Stays in luxury hotels near Char Dham shrines to
            ensure you are comfortable and well-rested.
            <br />
            4 . Hassle-Free Travel with safe and dependable cab services for the
            entire Char Dham pilgrimage route.
            <br />
            5 . Spiritual Tour Guides who provide enriching insights, helping
            you connect deeply with the sacredness of the Char Dham temples.
            <br />
            <br />
            Join us for the ultimate Char Dham Yatra experience in 2025, where
            every detail is planned with care to provide a peaceful, sacred, and
            rejuvenating journey.
          </p>
        </div>
      </section>

      {/*Animation section*/}
      <section className="overflow-hidden py-10 bg-emerald-50">
        <div className="flex animate-scroll w-4/5 pause-on-hover">
          {[...Array(2)].map(
            (
              _,
              i // Duplicate the set for looping
            ) => (
              <div key={i} className="flex space-x-6 px-4">
                {[
                  { title: "Kedarnath", img: "kedarnath.jpg" },
                  { title: "Badrinath", img: "kedarnath.jpg" },
                  { title: "Yamunotri", img: "kedarnath.jpg" },
                  { title: "Gangotri", img: "kedarnath.jpg" },
                  { title: "Auli", img: "kedarnath.jpg" },
                  { title: "Harshil Valley", img: "kedarnath.jpg" },
                ].map((place, index) => (
                  <div
                    key={index + "-" + i}
                    className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={place.img}
                      alt={place.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold">{place.title}</h3>
                      <button className="bg-blue-600 m-2 p-2 rounded-xl text-white">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
