"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "carter-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50"
        >
          <div className="max-w-4xl mx-auto p-4 md:p-5 rounded-2xl bg-[rgba(19,19,22,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Left: Icon + Text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.15)] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#D4A853]" />
                </div>
                <p className="text-sm text-[rgba(245,245,245,0.6)] leading-relaxed">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
                  <a
                    href="#contact"
                    className="text-[#D4A853] hover:text-[#E8C97A] underline underline-offset-2 transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Right: Buttons */}
              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none bg-gradient-to-r from-[#D4A853] to-[#B8922F] hover:from-[#E8C97A] hover:to-[#D4A853] text-[#0A0A0B] font-semibold px-6 py-2.5 text-sm rounded-xl shadow-lg shadow-[rgba(212,168,83,0.2)] hover:shadow-[rgba(212,168,83,0.3)] transition-all duration-300"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="flex-1 md:flex-none border-[rgba(255,255,255,0.12)] bg-transparent hover:bg-white/5 text-[rgba(245,245,245,0.7)] hover:text-white font-medium px-6 py-2.5 text-sm rounded-xl transition-all duration-300"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
