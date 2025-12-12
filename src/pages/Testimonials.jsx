import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Advocate Subhan handled my property dispute very professionally. Honest, supportive, and client-focused.",
    name: "Rahman Ansari",
    place: "Purnea, Bihar",
  },
  {
    text: "Family matter ka solution peacefully ho gaya. Legal guidance aur support excellent tha.",
    name: "Shama Parveen",
    place: "Kishanganj, Bihar",
  },
  {
    text: "Cheque bounce case ka resolution fast tha. Advocate Subhan genuine aur result-oriented hain.",
    name: "Manoj Kumar",
    place: "Purnea City",
  },
  {
    text: "Criminal matter me representation strong tha. Pure procedure me proper guidance milta raha.",
    name: "Arif Alam",
    place: "Forbesganj, Bihar",
  },
  {
    text: "Civil dispute professional tareeke se handle kiya. Time-to-time updates milte rahe.",
    name: "Suresh Yadav",
    place: "Araria, Bihar",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 py-24 text-white font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1699865574995-eb61e12d97bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* GOLD LINE */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mb-6"></div>

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Client Testimonials
        </h1>

        {/* SLIDER */}
        <div className="max-w-2xl w-full">
          <div
            className="rounded-2xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl 
          shadow-xl p-10 text-center transition-all duration-300 min-h-[260px]"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              “{testimonials[index].text}”
            </p>

            <h3 className="text-2xl font-bold text-yellow-400 mb-1">
              {testimonials[index].name}
            </h3>

            <p className="text-gray-300 text-sm">{testimonials[index].place}</p>
          </div>

          {/* DOTS */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === index
                    ? "bg-yellow-500 scale-110"
                    : "bg-gray-400/70 hover:bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
