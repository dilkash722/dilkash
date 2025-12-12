import { useState } from "react";

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-2 backdrop-blur-md font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* NAV CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LEFT: PROFILE */}
        <div className="flex items-center gap-3">
          <img
            src="https://scontent.fpat2-1.fna.fbcdn.net/v/t39.30808-6/489225569_2950005748502464_8449418859577968424_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DwGvkzSqnjUQ7kNvwHzEF34&_nc_oc=AdmMYsIxFUf-vH5hjq9eRrXtNiqXm1T07LSB6kppmtPGCRKhjvqQWzUlrlbT_X10pJMeOa9eHbqSfbE2XMsNfyTi&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&_nc_gid=ftnGuzYwGFovDDJ7a2rhGw&oh=00_AflU5J4JXjpkNG0d5HKFNy_UpUt6RyTWgQ0SJ6YbgNDliQ&oe=693FE08E"
            alt="Advocate Abdus Subhan"
            className="h-12 w-12 rounded-full object-cover border border-yellow-500"
          />
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">
              Abdul Subhan
            </h1>
            <p className="text-sm text-gray-300 -mt-1">Advocate</p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "practice", label: "Practice" },
            { id: "testimonials", label: "Testimonials" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-200 hover:text-yellow-400"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* THIN DIVIDER */}
      <div className="relative z-10 w-full h-px bg-white/20"></div>

      {/* MOBILE MENU */}
      {open && (
        <div className="relative z-10 md:hidden bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 space-y-3">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "practice", label: "Practice" },
            { id: "testimonials", label: "Testimonials" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={
                activeSection === item.id
                  ? "block text-yellow-400 font-semibold"
                  : "block text-gray-200 hover:text-yellow-400"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
