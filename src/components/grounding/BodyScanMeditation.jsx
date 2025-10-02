import React, { useState, useEffect } from "react";
import { X, Play, Pause, SkipForward } from "lucide-react";

export default function BodyScanMeditation({ onClose }) {
  const [currentPart, setCurrentPart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  const bodyParts = [
    {
      name: "Feet & Toes",
      instruction: "Notice your feet touching the ground. Wiggle your toes. Feel any tension release.",
      duration: 20,
      color: "#A5D6A7"
    },
    {
      name: "Legs",
      instruction: "Bring awareness to your legs. Notice if they feel heavy or light. Let them relax.",
      duration: 20,
      color: "#81D4FA"
    },
    {
      name: "Hips & Lower Back",
      instruction: "Feel your hips and lower back. Notice the chair or surface supporting you. Release any tightness.",
      duration: 20,
      color: "#FFB6C1"
    },
    {
      name: "Belly & Chest",
      instruction: "Notice your breathing. Feel your belly and chest rise and fall. No need to change it.",
      duration: 20,
      color: "#FFD54F"
    },
    {
      name: "Shoulders & Arms",
      instruction: "Feel your shoulders. Often we hold tension here. Let them drop and soften.",
      duration: 20,
      color: "#CE93D8"
    },
    {
      name: "Hands & Fingers",
      instruction: "Notice your hands. Gently flex and release your fingers. Feel the energy in your palms.",
      duration: 20,
      color: "#A5D6A7"
    },
    {
      name: "Neck & Jaw",
      instruction: "Feel your neck and jaw. Gently release any clenching. Let your tongue rest softly.",
      duration: 20,
      color: "#81D4FA"
    },
    {
      name: "Face & Head",
      instruction: "Notice your face. Relax your forehead, eyes, cheeks. Feel the weight of your head.",
      duration: 20,
      color: "#FFB6C1"
    },
    {
      name: "Whole Body",
      instruction: "Now feel your whole body as one. Notice the calm and presence you've created.",
      duration: 30,
      color: "#C8D5B9"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;

        // Move to next part
        if (currentPart < bodyParts.length - 1) {
          setCurrentPart(currentPart + 1);
          return bodyParts[currentPart + 1].duration;
        } else {
          setIsPlaying(false);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, currentPart, timeLeft]);

  const handleStart = () => {
    setIsPlaying(true);
    setTimeLeft(bodyParts[currentPart].duration);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentPart < bodyParts.length - 1) {
      setCurrentPart(currentPart + 1);
      setTimeLeft(bodyParts[currentPart + 1].duration);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentPart(0);
    setTimeLeft(bodyParts[0].duration);
  };

  const part = bodyParts[currentPart];
  const isComplete = currentPart === bodyParts.length - 1 && timeLeft === 0;

  return (
    <div className="clay-card p-8 lily-bloom">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#558B2F" }}>
            Morning Dew Meditation
          </h2>
          <p style={{ color: "#7CB342" }}>
            A gentle body scan to release tension and find calm
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg transition-all"
          style={{ background: "rgba(124, 179, 66, 0.2)" }}
        >
          <X className="w-6 h-6" style={{ color: "#558B2F" }} />
        </button>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2" style={{ color: "#A8B5A0" }}>
          <span>Part {currentPart + 1} of {bodyParts.length}</span>
          <span>{timeLeft}s</span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(168, 181, 160, 0.2)" }}
        >
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${((currentPart + 1) / bodyParts.length) * 100}%`,
              background: `linear-gradient(90deg, ${part.color}, ${part.color}dd)`
            }}
          />
        </div>
      </div>

      {/* Current Body Part */}
      <div className="text-center mb-8">
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 lily-float transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${part.color}, ${part.color}88)`,
            boxShadow: `0 0 40px ${part.color}66`
          }}
        >
          <div className="text-4xl font-bold text-white">
            {isPlaying ? timeLeft : "•"}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4" style={{ color: "#558B2F" }}>
          {part.name}
        </h3>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#7CB342" }}>
          {part.instruction}
        </p>
      </div>

      {/* Controls */}
      {!isComplete ? (
        <div className="flex justify-center gap-4">
          {!isPlaying ? (
            <button
              onClick={handleStart}
              className="clay-button px-8 py-4 text-white font-medium text-lg flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              {currentPart === 0 && timeLeft === bodyParts[0].duration ? "Begin" : "Resume"}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 transition-all"
              style={{
                background: "rgba(168, 181, 160, 0.2)",
                color: "#558B2F"
              }}
            >
              <Pause className="w-5 h-5" />
              Pause
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={currentPart === bodyParts.length - 1}
            className="px-6 py-4 rounded-xl font-medium text-lg flex items-center gap-2 transition-all"
            style={{
              background: "rgba(168, 181, 160, 0.2)",
              color: "#558B2F",
              opacity: currentPart === bodyParts.length - 1 ? 0.5 : 1
            }}
          >
            <SkipForward className="w-5 h-5" />
            Skip
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#558B2F" }}>
              Meditation Complete
            </h3>
            <p style={{ color: "#7CB342" }}>
              Take a moment to notice how you feel now
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="clay-button px-8 py-4 text-white font-medium"
            >
              Start Again
            </button>
            <button
              onClick={onClose}
              className="px-8 py-4 rounded-xl font-medium transition-all"
              style={{
                background: "rgba(168, 181, 160, 0.2)",
                color: "#558B2F"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Info */}
      {!isPlaying && currentPart === 0 && (
        <div className="mt-8 clay-card p-6" style={{ background: "rgba(200, 213, 185, 0.2)" }}>
          <h4 className="font-semibold mb-2" style={{ color: "#558B2F" }}>
            Tips for this meditation:
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: "#7CB342" }}>
            <li>• Find a comfortable position, sitting or lying down</li>
            <li>• You can close your eyes or keep a soft gaze</li>
            <li>• There's no "right" way to feel—just notice what's there</li>
            <li>• Take your time with each part of your body</li>
          </ul>
        </div>
      )}
    </div>
  );
}
