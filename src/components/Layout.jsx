import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, FileText, AlertCircle, Flower2, Activity, Heart, Phone, Shield, Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Home },
    { name: "Daily Reflection", path: createPageUrl("RealityCheck"), icon: AlertCircle },
    { name: "Wellness Guide", path: createPageUrl("RedFlags"), icon: Flower2 },
    { name: "Journal", path: createPageUrl("Journal"), icon: FileText },
    { name: "Grounding", path: createPageUrl("Grounding"), icon: Heart },
    { name: "Insights", path: createPageUrl("Patterns"), icon: Activity },
    { name: "Support", path: createPageUrl("Resources"), icon: Phone },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #D9F5F0 0%, #76E2E0 50%, #2CACAD 100%)" }}>
      <style>{`
        :root {
          --prussian-blue: #1C4E47;
          --midnight-green: #024D60;
          --light-sea-green: #2CACAD;
          --sky-blue: #76E2E0;
          --water: #D9F5F0;
          --dark-jungle: #122B1D;
          --william-hooker: #637E72;
          --pistachio: #9CC97F;
          --light-gray: #CDDEC8;
          --pewter-blue: #90B7BF;
        }

        .clay-card {
          background: rgba(217, 245, 240, 0.85);
          border-radius: 24px;
          box-shadow:
            10px 10px 20px rgba(2, 77, 96, 0.15),
            -10px -10px 20px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .clay-card:hover {
          transform: translateY(-3px);
          box-shadow:
            14px 14px 28px rgba(2, 77, 96, 0.2),
            -10px -10px 20px rgba(255, 255, 255, 0.95),
            inset 3px 3px 6px rgba(255, 255, 255, 0.8);
        }

        .clay-button {
          background: linear-gradient(145deg, #1C4E47, #024D60);
          border-radius: 16px;
          box-shadow:
            6px 6px 12px rgba(28, 78, 71, 0.3),
            -4px -4px 8px rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .clay-button:hover {
          transform: translateY(-2px);
          background: linear-gradient(145deg, #024D60, #2CACAD);
          box-shadow:
            8px 8px 16px rgba(28, 78, 71, 0.35),
            -5px -5px 10px rgba(255, 255, 255, 0.8);
        }

        .clay-button:active {
          box-shadow:
            inset 6px 6px 12px rgba(28, 78, 71, 0.4),
            inset -3px -3px 6px rgba(44, 172, 173, 0.3);
          transform: translateY(0);
        }

        .clay-input {
          background: rgba(217, 245, 240, 0.65);
          border-radius: 18px;
          border: none;
          box-shadow:
            inset 6px 6px 12px rgba(2, 77, 96, 0.15),
            inset -3px -3px 6px rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
        }

        .clay-input:focus {
          outline: none;
          box-shadow:
            inset 8px 8px 16px rgba(2, 77, 96, 0.22),
            inset -3px -3px 6px rgba(255, 255, 255, 0.7);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes waveRise {
          0% { transform: scale(0.7); opacity: 0; }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes ripple {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0.3; }
        }

        .tide-float {
          animation: float 4s ease-in-out infinite;
        }

        .wave-rise {
          animation: waveRise 0.6s ease-out;
        }

        .wave-svg {
          filter: drop-shadow(0 4px 8px rgba(44, 172, 173, 0.4));
        }
      `}</style>

      {/* Header */}
      <header className="clay-card sticky top-0 z-50 mx-4 mt-4 mb-6">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center tide-float"
                   style={{
                     background: "linear-gradient(145deg, #1C4E47, #024D60)",
                     boxShadow: "6px 6px 12px rgba(2, 77, 96, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.7)"
                   }}>
                <svg className="w-8 h-8 wave-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 12 4 8 8 8C12 8 12 12 16 12C20 12 22 8 22 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 16C2 16 4 12 8 12C12 12 12 16 16 16C20 16 22 12 22 12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  <path d="M2 20C2 20 4 16 8 16C12 16 12 20 16 20C20 20 22 16 22 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold" style={{ color: "#1C4E47" }}>ClarityKit</h1>
                <p className="text-xs" style={{ color: "#024D60" }}>Wellness & Reflection</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-all"
              style={{ background: "rgba(118, 226, 224, 0.3)" }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#024D60" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#024D60" }} />
              )}
            </button>

            {/* Desktop Quick Exit */}
            <button
              className="hidden md:block clay-button px-4 py-2 text-sm font-medium text-white"
              onClick={() => window.location.href = "https://www.google.com"}
            >
              <Shield className="w-4 h-4 inline mr-2" />
              Quick Exit
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0, 0, 0, 0.3)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-4 right-4 clay-card p-4 space-y-2 wave-rise">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all"
                  style={{
                    background: isActive ? "linear-gradient(145deg, #1C4E47, #024D60)" : "transparent",
                    color: isActive ? "#FFFFFF" : "#024D60",
                    boxShadow: isActive ? "6px 6px 12px rgba(28, 78, 71, 0.35), -3px -3px 6px rgba(255, 255, 255, 0.6)" : "none"
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Quick Exit */}
            <button
              className="clay-button w-full py-4 text-white font-medium flex items-center justify-center gap-2"
              onClick={() => window.location.href = "https://www.google.com"}
            >
              <Shield className="w-5 h-5" />
              Quick Exit
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-32 md:pb-8 md:ml-80">
        {children}
      </main>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-6 top-32 w-64">
        <div className="clay-card p-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 p-3 rounded-2xl transition-all"
                style={{
                  background: isActive ? "linear-gradient(145deg, #1C4E47, #024D60)" : "transparent",
                  color: isActive ? "#FFFFFF" : "#024D60",
                  boxShadow: isActive ? "6px 6px 12px rgba(28, 78, 71, 0.35), -3px -3px 6px rgba(255, 255, 255, 0.6)" : "none"
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="clay-card mx-4 mb-4">
          <div className="flex items-center justify-around py-3">
            {navItems.slice(0, 5).map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all"
                  style={{
                    color: isActive ? "#2CACAD" : "#1C4E47"
                  }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{item.name.split(' ')[0]}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
