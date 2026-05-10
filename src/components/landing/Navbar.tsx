import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext"; // Import the language brain

const content = {
  en: {
    navLinks: [
      { label: "Home", href: "#hero" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#testimonials" },
      //{ label: "Tutors", href: "#tutors" }, Temp disabled
      { label: "FAQ", href: "#faq" },
    ],
    loginBtn: "Log In",
    joinBtn: "Join Now",
  },
  ms: {
    navLinks: [
      { label: "Utama", href: "#hero" },
      { label: "Pakej", href: "#pricing" },
      { label: "Ulasan", href: "#testimonials" },
      //{ label: "Tutor", href: "#tutors" }, Temp disabled
      { label: "Soalan Lazim", href: "#faq" },
    ],
    loginBtn: "Log Masuk",
    joinBtn: "Sertai Sekarang",
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage(); // Ask the app which language is active
  const currentText = content[language]; // Grab the correct text dictionary

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container px-4 md:px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
          <img 
  src={`${import.meta.env.BASE_URL}QTutorLogo.png`} 
  alt="QTutor Logo" 
  className="h-10 w-auto md:h-12" 
/>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {currentText.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-bold text-slate-600 hover:text-[#800000] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-bold text-slate-700 hover:text-slate-900">
                {currentText.loginBtn}
              </Button>
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              onClick={() => scrollTo("#pricing")}
              className="bg-[#800000] hover:bg-[#600000] text-white font-bold shadow-sm"
            >
              {currentText.joinBtn}
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-slate-600 hover:text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="container px-4 py-4 flex flex-col gap-2">
            {currentText.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-bold text-slate-600 hover:text-[#800000] py-3 border-b border-slate-100 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-slate-100">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full font-bold justify-center border-slate-200 text-slate-700">
                  {currentText.loginBtn}
                </Button>
              </Link>
              <Button 
                variant="default" 
                onClick={() => scrollTo("#pricing")}
                className="w-full font-bold justify-center bg-[#800000] hover:bg-[#600000] text-white shadow-sm"
              >
                {currentText.joinBtn}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;