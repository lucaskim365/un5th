/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  X,
  Globe,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Vision from "./components/Vision";
import History from "./components/History";
import Supporters from "./components/Supporters";
import Impact from "./components/Impact";
import SupportMission from "./components/SupportMission";

const CONTAINER_MAX_WIDTH = "max-w-7xl mx-auto px-6 md:px-12";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "vision" | "history" | "supporters" | "impact" | "support-mission">("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Vision", id: "vision" },
    { name: "History", id: "history" },
    { name: "Supporters", id: "supporters" },
    { name: "Impact", id: "impact" },
  ];

  const handleNavClick = (id: string) => {
    if (id === "home" || id === "vision" || id === "history" || id === "supporters" || id === "impact" || id === "support-mission") {
      setCurrentPage(id as "home" | "vision" | "history" | "supporters" | "impact" | "support-mission");
    } else {
      // For other sections, if we are on home, scroll to them. 
      // If we are on vision, history, supporters, impact, or support-mission, go to home first then scroll.
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "vision":
        return <Vision />;
      case "history":
        return <History />;
      case "supporters":
        return <Supporters />;
      case "impact":
        return <Impact />;
      case "support-mission":
        return <SupportMission />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1B1C1A] font-sans selection:bg-[#C8A44A]/20">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || currentPage !== "home" ? "bg-[#FAF9F5]/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className={`${CONTAINER_MAX_WIDTH} flex justify-between items-center`}>
          <button 
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-serif font-bold tracking-tighter text-[#0A1A3A] hover:opacity-80 transition-opacity"
          >
            유엔 제5사무국 한국유치위원회
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-serif tracking-widest uppercase transition-colors duration-300 ${
                  (currentPage === item.id) 
                    ? "text-[#0A1A3A] font-bold border-b-2 border-[#C8A44A] pb-1" 
                    : "text-[#0A1A3A]/60 hover:text-[#0A1A3A]"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick("support-mission")}
              className="bg-[#0A1A3A] text-white px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#0061A5] transition-all transform active:scale-95 rounded-sm"
            >
              Support Mission
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#0A1A3A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#FAF9F5] border-t border-black/5 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-serif tracking-widest uppercase text-left ${
                  currentPage === item.id ? "text-[#0A1A3A] font-bold" : "text-[#0A1A3A]/60"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick("support-mission")}
              className="bg-[#0A1A3A] text-white py-4 text-sm font-bold tracking-widest uppercase"
            >
              Support Mission
            </button>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className={currentPage !== "home" ? "pt-28 md:pt-36" : ""}>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1A3A] text-white py-20 border-t border-white/5">
        <div className={CONTAINER_MAX_WIDTH}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-sm">
              <div className="text-2xl font-serif font-bold tracking-tighter mb-6">유엔 제5사무국 한국유치위원회</div>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest">
                제5차 UN 본부 설립을 통해 아시아의 외교적 형평성을 옹호하는 글로벌 평화 이니셔티브입니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <h6 className="text-[10px] tracking-widest uppercase text-[#C8A44A] font-bold mb-6">Navigation</h6>
                <ul className="space-y-4 text-xs text-slate-400">
                  <li><button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors">Home</button></li>
                  <li><button onClick={() => handleNavClick("vision")} className="hover:text-white transition-colors">Vision</button></li>
                  <li><button onClick={() => handleNavClick("history")} className="hover:text-white transition-colors">History</button></li>
                  <li><button onClick={() => handleNavClick("supporters")} className="hover:text-white transition-colors">Supporters</button></li>
                  <li><button onClick={() => handleNavClick("support-mission")} className="hover:text-white transition-colors">Support Mission</button></li>
                </ul>
              </div>
              <div>
                <h6 className="text-[10px] tracking-widest uppercase text-[#C8A44A] font-bold mb-6">Legal</h6>
                <ul className="space-y-4 text-xs text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h6 className="text-[10px] tracking-widest uppercase text-[#C8A44A] font-bold mb-6">Contact</h6>
                <p className="text-xs text-slate-400">secretariat@un5thoffice.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] tracking-widest uppercase text-slate-500">
              © 2024 유엔 제5사무국 한국유치위원회. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Globe size={16} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Users size={16} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
