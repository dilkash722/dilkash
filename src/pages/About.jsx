export default function About() {
  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center text-white px-6 py-24 font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1699865574995-eb61e12d97bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        {/* GOLD LINE TOP */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6 rounded-lg"></div>

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
          About Advocate <span className="text-yellow-400">Abdus Subhan</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
          Advocate Subhan is a highly committed legal professional providing
          honest, ethical and result-driven legal services. With strong
          expertise in{" "}
          <span className="font-semibold text-white">
            Criminal, Civil, Family & Property Law
          </span>
          , he ensures clarity, fairness and powerful representation for every
          client.
        </p>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {/* LLB CARD */}
          <div className="p-6 rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition-all">
            {/* ICON - LAW DEGREE */}
            <svg
              className="w-12 h-12 text-yellow-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M2 7l10-5 10 5-10 5-10-5z" />
              <path d="M4 10v5c0 2 3 4 8 4s8-2 8-4v-5" />
              <path d="M12 12v9" />
            </svg>

            <h3 className="text-xl font-bold text-yellow-400">LLB</h3>
            <p className="text-gray-200 text-sm">Bachelor of Law</p>
            <p className="text-gray-400 text-xs mt-2">
              Aligarh Muslim University
            </p>
          </div>

          {/* MA CARD */}
          <div className="p-6 rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition-all">
            {/* ICON - CERTIFICATE */}
            <svg
              className="w-12 h-12 text-yellow-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 3h16v14H4z" />
              <path d="M8 7h8" />
              <path d="M8 11h5" />
              <path d="M12 17l2 4 2-4" />
            </svg>

            <h3 className="text-xl font-bold text-yellow-400">M.A</h3>
            <p className="text-gray-200 text-sm">Master of Arts</p>
            <p className="text-gray-400 text-xs mt-2">Delhi University</p>
          </div>

          {/* BA CARD */}
          <div className="p-6 rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition-all">
            {/* ICON - UNIVERSITY BUILDING */}
            <svg
              className="w-12 h-12 text-yellow-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M3 10l9-6 9 6" />
              <path d="M4 10h16v10H4z" />
              <path d="M9 14h2" />
              <path d="M13 14h2" />
            </svg>

            <h3 className="text-xl font-bold text-yellow-400">B.A</h3>
            <p className="text-gray-200 text-sm">Bachelor of Arts</p>
            <p className="text-gray-400 text-xs mt-2">Patna University</p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Committed to ensuring justice, dignity, and transparency for every
          client through professional legal representation.
        </p>
      </div>
    </div>
  );
}
