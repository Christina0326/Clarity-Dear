import React, { useState, useEffect } from "react";
import { X, Flower2 } from "lucide-react";

export default function BreathingExercise({ onClose }) {
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const phases = {
    inhale: { duration: 4, next: "hold", text: "Breathe In", color: "#7CB342", bgColor: "rgba(124, 179, 66, 0.3)" },
    hold: { duration: 4, next: "exhale", text: "Hold", color: "#81D4FA", bgColor: "rgba(129, 212, 250, 0.3)" },
    exhale: { duration: 6, next: "inhale", text: "Breathe Out", color: "#FFB74D", bgColor: "rgba(255, 183, 77, 0.3)" }
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
    <div className="clay-card p-12 text-center lily-bloom relative">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(168, 181, 160, 0.1)" }}
      >
        <X className="w-6 h-6" style={{ color: "#6B8268" }} />
      </button>

      <h2 className="text-3xl font-bold mb-8" style={{ color: "#6B8268" }}>
        Petal Breathing
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
          <Flower2
            className="w-32 h-32 transition-all duration-1000"
            style={{
              color: phases[phase].color,
              filter: `drop-shadow(0 0 12px ${phases[phase].color})`
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-bold mb-4" style={{ color: "#6B8268" }}>
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
            background: "rgba(168, 181, 160, 0.1)",
            color: "#6B8268"
          }}
        >
          Pause
        </button>
      )}

      <p className="mt-8 max-w-md mx-auto leading-relaxed" style={{ color: "#A8B5A0" }}>
        Follow the lily as it blooms. Breathe with the rhythm.
        Let each breath ground you in this moment.
      </p>
    </div>
  );
}
