import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center px-6 pt-12 pb-10 md:pt-16 md:pb-14 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1762081512133-30202f928bb9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Opacity Layer */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Intro Typewriter */}
        <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4 font-[Inter]">
          <Typewriter
            words={["Hello,", "I am Advocate Abdul Subhan"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={900}
          />
        </h3>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[Merriweather] font-extrabold leading-tight mb-6 drop-shadow-xl">
          Professional & Trusted Legal Counsel
          <br />
          <span className="text-yellow-400">
            Criminal • Civil • Family • Property Law
          </span>
        </h1>

        {/* Description */}
        <p
          className="max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed mb-10 bg-black/25 
          backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-xl font-[Inter]"
        >
          I deliver ethical, focused and result-driven legal representation.
          With deep courtroom experience and commitment to justice, I support
          clients in navigating complex legal challenges with clarity and
          confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* CALL */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-10 py-3 rounded-lg text-lg font-semibold bg-yellow-500 text-black 
              hover:bg-yellow-600 transition-transform duration-300 shadow-xl transform hover:scale-105 font-[Inter] text-center"
          >
            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-10 py-3 rounded-lg text-lg font-semibold bg-green-600 text-white 
              hover:bg-green-700 transition-transform duration-300 shadow-xl transform hover:scale-105 font-[Inter] text-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
