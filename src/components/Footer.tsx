
const Footer = () => {
  return (
    <footer className="bg-glow-darkest py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="flex items-center">
              <span className="text-2xl font-bold text-glow-cyan text-glow">
                glow<span className="text-base text-white font-normal ml-1">MEDIA</span>
              </span>
            </a>
          </div>
          
          <div className="mb-6 md:mb-0 text-white/60 text-center md:text-left">
            <p>© 2023-2025 Glow Media. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#services" className="text-white/60 hover:text-glow-cyan transition-colors">
              Services
            </a>
            <a href="#about" className="text-white/60 hover:text-glow-cyan transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-white/60 hover:text-glow-cyan transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative glow at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-glow-cyan/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
