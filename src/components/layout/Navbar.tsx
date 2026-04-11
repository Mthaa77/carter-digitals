"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigation, type PageKey } from "@/lib/navigation";

const navItems: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "portfolio", label: "Portfolio" },
  { key: "packages", label: "Packages" },
  { key: "contact", label: "Contact" },
];

export function Navbar() {
  const { currentPage, navigate, isMobileMenuOpen, setMobileMenuOpen } = useNavigation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page: PageKey) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A853] to-[#B8922F] flex items-center justify-center shadow-lg shadow-[rgba(212,168,83,0.2)] group-hover:shadow-[rgba(212,168,83,0.4)] transition-shadow duration-300">
                <span className="text-[#0A0A0B] font-bold text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>C</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold tracking-tight text-white leading-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Carter
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#D4A853] leading-none mt-0.5">
                  Digitals
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    currentPage === item.key
                      ? "text-[#D4A853]"
                      : "text-[rgba(245,245,245,0.7)] hover:text-white"
                  }`}
                >
                  {item.label}
                  {currentPage === item.key && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[rgba(212,168,83,0.1)] rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0724026893"
                className="flex items-center gap-2 text-sm text-[rgba(245,245,245,0.7)] hover:text-[#D4A853] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>072 402 6893</span>
              </a>
              <Button
                onClick={() => handleNavClick("contact")}
                className="bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-[rgba(212,168,83,0.2)] hover:shadow-[rgba(212,168,83,0.3)] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[#0F0F12] border-l border-[rgba(255,255,255,0.06)]"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(item.key)}
                      className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        currentPage === item.key
                          ? "text-[#D4A853] bg-[rgba(212,168,83,0.1)]"
                          : "text-[rgba(245,245,245,0.7)] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
                <div className="mt-auto pb-8 space-y-4">
                  <a
                    href="tel:0724026893"
                    className="flex items-center gap-3 text-sm text-[rgba(245,245,245,0.7)] hover:text-[#D4A853] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    072 402 6893
                  </a>
                  <Button
                    onClick={() => handleNavClick("contact")}
                    className="w-full bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
