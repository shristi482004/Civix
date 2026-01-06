const Footer = () => {
  return (
    <footer className=" border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        
        {/* Logo */}
        <h2 className="font-serif text-3xl font-bold text-gray-900">
          civix<span className="text-teal-600">.</span>
        </h2>

        {/* Tagline */}
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400">
          Built for the community
        </p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gray-200" />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Civix — Built for the community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
