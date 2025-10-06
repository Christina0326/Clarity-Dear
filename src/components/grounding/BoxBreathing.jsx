import React, { useState, useEffect } from "react";
import { X, Square } from "lucide-react";

export default function BoxBreathing({ onClose }) {
  const [phase, setPhase] = useState(0); // 0: inhale, 1: hold, 2: exhale, 3: hold
  const [count, setCount] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);

  const phases = [
    { name: "Breathe In", instruction: "Inhale slowly through your nose" },
    { name: "Hold", instruction: "Hold your breath gently" },
    { name: "Breathe Out", instruction: "Exhale slowly through your mouth" },
    { name: "Hold", instruction: "Hold your breath gently" }
  ];

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;

        // Move to next phase
        setPhase((currentPhase) => {
          const nextPhase = (currentPhase + 1) % 4;
          if (nextPhase === 0) setCycles(c => c + 1);
          return nextPhase;
        });
        return 4;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div className="clay-card p-8 wave-rise">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#122B1D" }}>
            Box Breathing
          </h2>
          <p style={{ color: "#122B1D" }}>
            A calming technique used to reduce stress and improve focus
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg transition-all"
          style={{ background: "rgba(230, 165, 140, 0.2)" }}
        >
          <X className="w-6 h-6" style={{ color: "#122B1D" }} />
        </button>
      </div>

      {/* Box Visualization */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-64 h-64">
          {/* Box */}
          <div
            className="absolute inset-0 border-8 rounded-lg transition-all duration-1000"
            style={{
              borderColor: "#537E72",
              background: "rgba(242, 218, 215, 0.3)"
            }}
          >
            {/* Moving indicator */}
            <div
              className="absolute w-6 h-6 rounded-full transition-all duration-1000 ease-linear"
              style={{
                background: "#537E72",
                boxShadow: "0 0 20px rgba(192, 121, 115, 0.45)",
                top: phase === 0 ? `${100 - (5 - count) * 25}%` :
                     phase === 1 ? "0%" :
                     phase === 2 ? `${(5 - count) * 25}%` :
                     "100%",
                left: phase === 0 ? "0%" :
                      phase === 1 ? `${(5 - count) * 25}%` :
                      phase === 2 ? "100%" :
                      `${100 - (5 - count) * 25}%`,
                transform: "translate(-50%, -50%)"
              }}
            />
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold mb-2" style={{ color: "#537E72" }}>
              {count}
            </div>
            <div className="text-xl font-semibold" style={{ color: "#122B1D" }}>
              {phases[phase].name}
            </div>
          </div>
        </div>
      </div>

      {/* Instruction */}
      <div className="text-center mb-8">
        <p className="text-lg" style={{ color: "#122B1D" }}>
          {phases[phase].instruction}
        </p>
        {cycles > 0 && (
          <p className="text-sm mt-2" style={{ color: "#122B1D" }}>
            Cycles completed: {cycles}
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        {!isActive ? (
          <button
            onClick={() => setIsActive(true)}
            className="clay-button px-8 py-4 text-white font-medium text-lg"
          >
            Start Exercise
          </button>
        ) : (
          <button
            onClick={() => {
              setIsActive(false);
              setPhase(0);
              setCount(4);
            }}
            className="px-8 py-4 rounded-xl font-medium text-lg transition-all"
            style={{
              background: "rgba(242, 218, 215, 0.35)",
              color: "#122B1D"
            }}
          >
            Stop
          </button>
        )}
      </div>

      {/* Instructions */}
      {!isActive && (
        <div className="mt-8 clay-card p-6" style={{ background: "rgba(230, 165, 140, 0.1)" }}>
          <h3 className="font-semibold mb-3" style={{ color: "#122B1D" }}>
            How it works:
          </h3>
          <ol className="space-y-2" style={{ color: "#122B1D" }}>
            <li>1. Inhale for 4 seconds</li>
            <li>2. Hold your breath for 4 seconds</li>
            <li>3. Exhale for 4 seconds</li>
            <li>4. Hold your breath for 4 seconds</li>
            <li>5. Repeat for several cycles</li>
          </ol>
        </div>
      )}
    </div>
  );
}
