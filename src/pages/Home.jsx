import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center px-6 pt-6 pb-10 md:pt-10 md:pb-12 text-white"
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
        <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-3">
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-xl">
          Professional & Trusted Legal Counsel
          <br />
          <span className="text-yellow-400">
            Criminal • Civil • Family • Property Law
          </span>
        </h1>

        {/* Description */}
        <p
          className="max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed mb-8 bg-black/25 
          backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-xl"
        >
          I deliver ethical, focused and result-driven legal representation.
          With deep courtroom experience and commitment to justice, I support
          clients in navigating complex legal challenges with clarity and
          confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* CALL BUTTON with ICON */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-10 py-3 rounded-lg text-lg font-semibold bg-yellow-500 text-black 
            hover:bg-yellow-600 transition-transform duration-300 shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15 .966 0 1.75-.784 1.75-1.75v-2.1c0-.72-.47-1.35-1.16-1.54l-3.03-.84a1.75 1.75 0 0 0-1.72.45l-.9.9a12.56 12.56 0 0 1-5.27-5.27l.9-.9a1.75 1.75 0 0 0 .45-1.72l-.84-3.03c-.19-.69-.82-1.16-1.54-1.16h-2.1C3.03 5 2.25 5.784 2.25 6.75z" />
            </svg>
            Call Now
          </a>

          {/* WHATSAPP BUTTON with ICON */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="px-10 py-3 rounded-lg text-lg font-semibold bg-green-600 text-white 
            hover:bg-green-700 transition-transform duration-300 shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.8 5.5 2.2 7.9L0 32l8.4-2.7c2.3 1.3 5 2 7.6 2 8.5 0 15.4-6.9 15.4-15.4C31.4 7.5 24.5.6 16 .6zm0 28c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-5 1.6 1.6-4.9-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.3 6-13.3 13.3-13.3s13.3 6 13.3 13.3S23.3 28.6 16 28.6zm7.2-10.7c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.7-.2-1 .2-.3.3-1.2 1.4-1.4 1.7-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4-.02-.6.17-.8.18-.18.4-.46.6-.7.2-.24.3-.4.46-.7.15-.3.08-.5 0-.7-.1-.2-.9-2.2-1.2-3.1-.3-.9-.6-.8-.9-.9h-.7c-.2 0-.7.1-1.1.6-.4.5-1.4 1.4-1.4 3.4 0 2 .1 3.4 2.1 5.7 2 2.3 4.8 3.9 7.2 4.5.7.2 1.3.2 1.8.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
