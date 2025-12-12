export default function Footer() {
  return (
    <footer
      className="relative text-white py-10 font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        {/* Gold Divider */}
        <div className="w-20 h-1 bg-yellow-500 rounded-lg mx-auto mb-4"></div>

        <h2 className="text-2xl font-bold tracking-wide mb-2">
          Advocate Abdul Subhan
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Criminal • Civil • Family • Property Law
          <br />
          Professional Legal Representation with Integrity
        </p>

        {/* Thin White Divider */}
        <div className="w-full h-px bg-white/20 my-4"></div>

        <p className="text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
