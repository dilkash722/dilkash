export default function Contact() {
  const cardStyle =
    "p-4 sm:p-6 rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition break-all no-underline";

  return (
    <div
      className="min-h-screen w-full relative px-6 py-24 text-white flex flex-col items-center font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1698920717731-6819a3de9739?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl text-center">
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mx-auto mb-6"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
          Contact <span className="text-yellow-400">Advocate Subhan</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-16">
          For legal consultation regarding{" "}
          <span className="font-semibold text-white">
            Criminal, Civil, Family, Property & Cheque Bounce
          </span>{" "}
          cases. Practicing at{" "}
          <span className="text-yellow-400 font-semibold">
            Purnea District Civil Court, Bihar.
          </span>
        </p>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-2
            md:grid-cols-4
            gap-8 
            mt-4
          "
        >
          {/* PHONE */}
          <div className={cardStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-400 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15 .966 0 1.75-.784 1.75-1.75v-2.1c0-.72-.47-1.35-1.16-1.54l-3.03-.84a1.75 1.75 0 0 0-1.72.45l-.9.9a12.56 12.56 0 0 1-5.27-5.27l.9-.9a1.75 1.75 0 0 0 .45-1.72l-.84-3.03c-.19-.69-.82-1.16-1.54-1.16h-2.1C3.03 5 2.25 5.784 2.25 6.75z" />
            </svg>
            <p className="text-xl font-bold text-yellow-400 break-all no-underline">
              Phone
            </p>
            <p className="text-gray-300 text-sm break-all no-underline">
              +91 XXXXXXXXXX
            </p>
          </div>

          {/* WHATSAPP */}
          <div className={cardStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-400 mx-auto mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.17 6.41 2.17 11.87c0 2.09.62 4.04 1.69 5.67L2 22l4.62-1.81c1.59.87 3.42 1.37 5.38 1.37 5.46 0 9.87-4.41 9.87-9.87C21.87 6.41 17.5 2 12.04 2Zm0 17.8c-1.67 0-3.22-.49-4.53-1.33l-.32-.2-2.74 1.08 1.06-2.66-.22-.34a7.7 7.7 0 0 1-1.3-4.24c0-4.26 3.47-7.73 7.73-7.73s7.73 3.47 7.73 7.73-3.47 7.73-7.73 7.73Z" />
            </svg>
            <p className="text-xl font-bold text-yellow-400 break-all no-underline">
              WhatsApp
            </p>
            <p className="text-gray-300 text-sm break-all no-underline">
              +91 XXXXXXXXXX
            </p>
          </div>

          {/* EMAIL */}
          <div className={cardStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-400 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M3 5h18v14H3z" />
              <path d="M3 5l9 7 9-7" />
            </svg>
            <p className="text-xl font-bold text-yellow-400 break-all no-underline">
              Email
            </p>
            <p className="text-gray-300 text-sm break-all no-underline">
              advocate.subhan@example.com
            </p>
          </div>

          {/* COURT */}
          <div className={cardStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-yellow-400 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M2 10h20L12 3 2 10z" />
              <path d="M6 10v7m12-7v7M4 21h16" />
            </svg>
            <p className="text-xl font-bold text-yellow-400 break-all no-underline">
              Court
            </p>
            <p className="text-gray-300 text-sm break-all no-underline">
              Purnea District Civil Court
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
