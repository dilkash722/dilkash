"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center gap-1">
          <p className="text-sm font-medium tracking-tight text-white">
            Md Dilkash Alam
          </p>

          <p className="text-[10.5px] font-medium tracking-[0.20em] text-gray-400 uppercase">
            Web & Software Systems Developer
          </p>

          <p className="text-[10.5px] tracking-wide text-gray-600">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
