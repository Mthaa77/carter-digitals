"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigation } from "@/lib/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ServicesPage from "@/components/pages/ServicesPage";
import PortfolioPage from "@/components/pages/PortfolioPage";
import PackagesPage from "@/components/pages/PackagesPage";
import ContactPage from "@/components/pages/ContactPage";

const pageComponents = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  portfolio: PortfolioPage,
  packages: PackagesPage,
  contact: ContactPage,
};

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function Page() {
  const { currentPage, navigate } = useNavigation();

  // Listen for hash changes to support direct navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      const validPages = ["home", "about", "services", "portfolio", "packages", "contact"];
      if (hash && validPages.includes(hash)) {
        navigate(hash as keyof typeof pageComponents);
      }
    };
    window.addEventListener("hashchange", handleHash);
    // Check initial hash
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, [navigate]);

  // Keyboard accessibility
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const pages = ["home", "about", "services", "portfolio", "packages", "contact"];
      const idx = pages.indexOf(currentPage);
      if (e.altKey) {
        if (e.key === "ArrowRight" && idx < pages.length - 1) {
          navigate(pages[idx + 1] as keyof typeof pageComponents);
          window.location.hash = pages[idx + 1];
        } else if (e.key === "ArrowLeft" && idx > 0) {
          navigate(pages[idx - 1] as keyof typeof pageComponents);
          window.location.hash = pages[idx - 1];
        }
      }
    },
    [currentPage, navigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const PageComponent = pageComponents[currentPage];

  // Update hash on navigation
  useEffect(() => {
    if (currentPage !== "home") {
      window.history.replaceState(null, "", `#${currentPage}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B]">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <PageComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
