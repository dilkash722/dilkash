export default function Practice() {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center px-6 py-20 text-white font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1698920717731-6819a3de9739?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Gold Line */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mb-6"></div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Practice Areas
        </h1>

        {/* Location */}
        <p className="text-lg md:text-xl text-gray-200 mb-12 text-center">
          Legal Practice at{" "}
          <span className="font-bold text-yellow-400">
            Purnea District Civil Court, Bihar
          </span>
        </p>

        {/* Practice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              title: "Criminal Law",
              desc: "Bail matters, FIR, criminal defense & legal representation.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l8 4-8 4-8-4 8-4z" />
                  <path d="M4 10l8 4 8-4" />
                  <path d="M4 15l8 4 8-4" />
                </svg>
              ),
            },
            {
              title: "Civil Law",
              desc: "Civil disputes, suits, injunctions & property-related matters.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h18" />
                  <path d="M6 3h12v4H6z" />
                  <path d="M6 7v14h12V7" />
                </svg>
              ),
            },
            {
              title: "Family Law",
              desc: "Divorce, maintenance, custody & domestic settlements.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="16" cy="8" r="3" />
                  <path d="M2 21c1-4 5-7 10-7s9 3 10 7" />
                </svg>
              ),
            },
            {
              title: "Property Law",
              desc: "Land disputes, registry issues, ownership verification.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10l9-7 9 7" />
                  <path d="M4 10v10h16V10" />
                  <path d="M9 15h2v5H9z" />
                </svg>
              ),
            },
            {
              title: "Cheque Bounce",
              desc: "NI Act cases, legal notices & court representation.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v14H4z" />
                  <path d="M8 8h8" />
                  <path d="M8 12h5" />
                </svg>
              ),
            },
            {
              title: "Legal Consultation",
              desc: "Expert legal guidance for all types of cases.",
              icon: (
                <svg
                  className="w-12 h-12 text-yellow-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 017 7c0 4-7 13-7 13S5 13 5 9a7 7 0 017-7z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-500/30 shadow-xl hover:bg-white/20 transition-all text-center"
            >
              {card.icon}

              <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                {card.title}
              </h2>

              <p className="text-gray-200">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
