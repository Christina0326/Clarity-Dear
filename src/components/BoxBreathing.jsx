import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const phases = {
  inhale: { next: "hold1", text: "Breathe In", color: "#C8D5B9" },
  hold1: { next: "exhale", text: "Hold", color: "#D4E4E8" },
  exhale: { next: "hold2", text: "Breathe Out", color: "#F4E8E9" },
  hold2: { next: "inhale", text: "Hold", color: "#F5E6D3" }
};

export default function BoxBreathing({ onClose }) {
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);

  const duration = 4; // 4 seconds for each phase

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= duration) {
          const nextPhase = phases[phase].next;
          setPhase(nextPhase);
          if (nextPhase === "inhale") {
            setCycles(c => c + 1);
          }
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  // Calculate box position for animation
  const getBoxTransform = () => {
    const size = 256; // Match w-64 h-64 (16rem = 256px)
    const positions = {
      inhale: { x: 0, y: 0 }, // Top left to top right
      hold1: { x: size, y: 0 }, // Top right to bottom right
      exhale: { x: size, y: size }, // Bottom right to bottom left
      hold2: { x: 0, y: size } // Bottom left to top left
    };
    const current = positions[phase];
    const progress = count / duration;

    // Calculate next position
    const nextPhase = phases[phase].next;
    const next = positions[nextPhase];

    const x = current.x + (next.x - current.x) * progress;
    const y = current.y + (next.y - current.y) * progress;

    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="clay-card p-12 text-center lily-bloom">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(168, 181, 160, 0.1)" }}
      >
        <X className="w-6 h-6" style={{ color: "#6B8268" }} />
      </button>

      <h2 className="text-3xl font-bold mb-8" style={{ color: "#6B8268" }}>
        Box Breathing
      </h2>

      <p className="text-sm mb-8" style={{ color: "#A8B5A0" }}>
        Follow the movement around the box. 4 seconds each side.
      </p>

      {/* Box Animation Container */}
      <div className="relative w-64 h-64 mx-auto mb-8">
        {/* Static Box Outline */}
        <div
          className="absolute inset-0 border-4 rounded-3xl"
          style={{
            borderColor: phases[phase].color,
            boxShadow: `0 0 30px ${phases[phase].color}66`
          }}
        />

        {/* Moving Dot */}
        <div
          className="absolute w-8 h-8 rounded-full -ml-4 -mt-4 transition-all duration-1000 ease-linear"
          style={{
            transform: getBoxTransform(),
            background: `radial-gradient(circle, ${phases[phase].color}, ${phases[phase].color}dd)`,
            boxShadow: `0 0 20px ${phases[phase].color}, 0 0 40px ${phases[phase].color}66`
          }}
        />

        {/* Corner Labels */}
        <div className="absolute -top-10 left-0 text-sm font-medium" style={{ color: "#C8D5B9" }}>
          Breathe In
        </div>
        <div className="absolute -top-10 right-0 text-sm font-medium text-right" style={{ color: "#D4E4E8" }}>
          Hold
        </div>
        <div className="absolute -bottom-10 right-0 text-sm font-medium text-right" style={{ color: "#F4E8E9" }}>
          Breathe Out
        </div>
        <div className="absolute -bottom-10 left-0 text-sm font-medium" style={{ color: "#F5E6D3" }}>
          Hold
        </div>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-bold mb-4" style={{ color: "#6B8268" }}>
          {phases[phase].text}
        </div>
        <div className="text-6xl font-bold" style={{ color: phases[phase].color }}>
          {count}
        </div>
        <div className="text-sm mt-4" style={{ color: "#A8B5A0" }}>
          Cycles completed: {cycles}
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

      <p className="mt-8 max-w-md mx-auto leading-relaxed text-sm" style={{ color: "#A8B5A0" }}>
        Box breathing is used by athletes, performers, and military personnel to reduce stress and improve focus.
        Each side of the box is 4 seconds—equal and steady.
      </p>
    </div>
  );
}
