import React, { useState, useEffect } from "react";
import { X, Waves } from "lucide-react";

export default function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const phases = {
    inhale: { duration: 4, next: "hold", text: "Breathe In", color: "#1C4E47", bgColor: "rgba(44, 172, 173, 0.3)" },
    hold: { duration: 4, next: "exhale", text: "Hold", color: "#2CACAD", bgColor: "rgba(118, 226, 224, 0.3)" },
    exhale: { duration: 6, next: "inhale", text: "Breathe Out", color: "#76E2E0", bgColor: "rgba(217, 245, 240, 0.3)" }
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= phases[phase].duration) {
          setPhase(phases[phase].next);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, count, phases]);

  const scale = phase === "inhale" ? 1.5 : phase === "hold" ? 1.5 : 1;

  return (
    <div className="clay-card p-12 text-center wave-rise relative">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(217, 245, 240, 0.5)" }}
      >
        <X className="w-6 h-6" style={{ color: "#1C4E47" }} />
      </button>

      <h2 className="text-3xl font-bold mb-8" style={{ color: "#1C4E47" }}>
        Ocean Breathing
      </h2>

      <div className="relative w-64 h-64 mx-auto mb-12">
        <div
          className="absolute inset-0 rounded-full transition-all duration-1000 flex items-center justify-center"
          style={{
            transform: `scale(${scale})`,
            background: `radial-gradient(circle, ${phases[phase].bgColor} 0%, ${phases[phase].bgColor} 40%, transparent 70%)`,
            boxShadow: `0 0 80px ${phases[phase].bgColor}, inset 0 0 40px ${phases[phase].bgColor}`
          }}
        >
          <Waves
            className="w-32 h-32 transition-all duration-1000"
            style={{
              color: phases[phase].color,
              filter: `drop-shadow(0 0 12px ${phases[phase].color})`
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-bold mb-4" style={{ color: "#1C4E47" }}>
          {phases[phase].text}
        </div>
        <div className="text-6xl font-bold" style={{ color: phases[phase].color }}>
          {count}
        </div>
      </div>

      {!isActive ? (
        <button
          onClick={() => setIsActive(true)}
          className="clay-button px-12 py-4 text-white font-medium text-lg"
        >
          Start Breathing
        </button>
      ) : (
        <button
          onClick={() => setIsActive(false)}
          className="px-12 py-4 rounded-2xl font-medium text-lg transition-all"
          style={{
            background: "rgba(217, 245, 240, 0.5)",
            color: "#1C4E47"
          }}
        >
          Pause
        </button>
      )}

      <p className="mt-8 max-w-md mx-auto leading-relaxed" style={{ color: "#024D60" }}>
        Follow the waves as they flow. Breathe with the rhythm of the ocean.
        Let each breath ground you in this moment.
      </p>
    </div>
  );
}
