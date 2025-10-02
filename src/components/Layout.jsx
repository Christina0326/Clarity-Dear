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
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #FFE5F0 50%, #E0F2FF 100%)" }}>
      <style>{`
        :root {
          --lily-white: #FFFFFF;
          --soft-cream: #FFF8F0;
          --sage-stem: #7CB342;
          --soft-mint: #A5D6A7;
          --deep-forest: #558B2F;
          --blush-petal: #FFB6C1;
          --dew-blue: #81D4FA;
          --soft-gold: #FFD54F;
          --warm-amber: #FFB74D;
          --gentle-coral: #FF8A80;
          --yellow-flag: #FFF176;
        }

        .clay-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow:
            10px 10px 20px rgba(117, 179, 66, 0.15),
            -10px -10px 20px rgba(255, 255, 255, 0.8),
            inset 3px 3px 6px rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        .clay-card:hover {
          transform: translateY(-3px);
          box-shadow:
            14px 14px 28px rgba(117, 179, 66, 0.2),
            -10px -10px 20px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7);
        }

        .clay-button {
          background: linear-gradient(145deg, #7CB342, #558B2F);
          border-radius: 20px;
          box-shadow:
            8px 8px 16px rgba(85, 139, 47, 0.3),
            -6px -6px 12px rgba(255, 255, 255, 0.6),
            inset 2px 2px 4px rgba(255, 255, 255, 0.4);
          transition: all 0.2s ease;
        }

        .clay-button:hover {
          box-shadow:
            6px 6px 12px rgba(85, 139, 47, 0.35),
            -4px -4px 8px rgba(255, 255, 255, 0.7),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .clay-button:active {
          box-shadow:
            inset 6px 6px 12px rgba(85, 139, 47, 0.3),
            inset -3px -3px 6px rgba(255, 255, 255, 0.4);
          transform: translateY(0);
        }

        .clay-input {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 18px;
          border: none;
          box-shadow:
            inset 6px 6px 12px rgba(117, 179, 66, 0.12),
            inset -3px -3px 6px rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
        }

        .clay-input:focus {
          outline: none;
          box-shadow:
            inset 8px 8px 16px rgba(117, 179, 66, 0.18),
            inset -3px -3px 6px rgba(255, 255, 255, 0.7);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @keyframes bloom {
          0% { transform: scale(0.7); opacity: 0; }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes petalFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0.3; }
        }

        .lily-float {
          animation: float 4s ease-in-out infinite;
        }

        .lily-bloom {
          animation: bloom 0.6s ease-out;
        }

        .lily-svg {
          filter: drop-shadow(0 4px 8px rgba(124, 179, 66, 0.3));
        }
      `}</style>

      {/* Header */}
      <header className="clay-card sticky top-0 z-50 mx-4 mt-4 mb-6">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center lily-float"
                   style={{
                     background: "linear-gradient(145deg, #FFB6C1, #FF8A80)",
                     boxShadow: "6px 6px 12px rgba(255, 138, 128, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                   }}>
                <svg className="w-8 h-8 lily-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" fill="white" stroke="white" strokeWidth="2"/>
                  <path d="M12 14C12 14 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 14 12 14Z" fill="white" stroke="white" strokeWidth="2"/>
                  <path d="M12 8L8 12L12 14L16 12L12 8Z" fill="rgba(255,255,255,0.7)"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold" style={{ color: "#558B2F" }}>Bloom Daily</h1>
                <p className="text-xs" style={{ color: "#7CB342" }}>Wellness & Reflection</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-all"
              style={{ background: "rgba(124, 179, 66, 0.1)" }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#558B2F" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#558B2F" }} />
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
          <div className="absolute top-24 left-4 right-4 clay-card p-4 space-y-2 lily-bloom">
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
                    background: isActive ? "linear-gradient(145deg, #7CB342, #558B2F)" : "transparent",
                    color: isActive ? "#FFFFFF" : "#558B2F",
                    boxShadow: isActive ? "6px 6px 12px rgba(85, 139, 47, 0.25), -3px -3px 6px rgba(255, 255, 255, 0.6)" : "none"
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
                  background: isActive ? "linear-gradient(145deg, #7CB342, #558B2F)" : "transparent",
                  color: isActive ? "#FFFFFF" : "#558B2F",
                  boxShadow: isActive ? "6px 6px 12px rgba(85, 139, 47, 0.25), -3px -3px 6px rgba(255, 255, 255, 0.6)" : "none"
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
                    color: isActive ? "#558B2F" : "#A5D6A7"
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
