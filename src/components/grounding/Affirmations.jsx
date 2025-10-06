import React, { useState } from "react";
import { X, RefreshCw, Heart } from "lucide-react";

export default function Affirmations({ onClose }) {
  const affirmations = [
    "I trust my perceptions and instincts",
    "My feelings are valid and deserve respect",
    "I deserve kindness, not confusion",
    "My reality is real, not imagined",
    "I am worthy of love that feels safe",
    "I can trust myself to know what's right",
    "My boundaries matter and deserve respect",
    "I am strong, even when I feel fragile",
    "Clarity will come with time",
    "I deserve peace, not constant anxiety",
    "My truth is mine, unchangeable",
    "I am not responsible for their emotions",
    "I can leave when I'm ready",
    "I am enough, exactly as I am",
    "My voice matters and deserves to be heard",
    "I am allowed to change my mind",
    "I deserve relationships that nurture, not drain",
    "I am choosing myself, one moment at a time",
    "I don't have to explain or justify my feelings",
    "What I experienced was real",
    "I'm allowed to protect my peace",
    "My needs are just as important",
    "I'm not being dramatic or oversensitive",
    "I deserve consistent respect and care",
    "I am not alone in this experience",
    "My intuition is trying to protect me",
    "I have the right to feel safe",
    "I am worthy of being believed",
    "My happiness matters",
    "I can heal from this"
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * affirmations.length)
  );

  const getNext = () => {
    setCurrentIndex((prev) => (prev + 1) % affirmations.length);
  };

  return (
    <div className="clay-card p-12 text-center wave-rise max-w-2xl mx-auto relative">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(217, 245, 240, 0.5)" }}
      >
        <X className="w-6 h-6" style={{ color: "#1C4E47" }} />
      </button>

      <h2 className="text-3xl font-bold mb-8" style={{ color: "#1C4E47" }}>
        Affirmations
      </h2>

      <div className="mb-12">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 tide-float"
          style={{
            background: "linear-gradient(145deg, #2CACAD, #76E2E0)",
            boxShadow: "10px 10px 20px rgba(44, 172, 173, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.7)"
          }}
        >
          <Heart className="w-10 h-10 text-white" />
        </div>

        <div className="clay-card p-8 mb-8" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
          <p className="text-2xl font-medium leading-relaxed" style={{ color: "#1C4E47" }}>
            "{affirmations[currentIndex]}"
          </p>
        </div>

        <p className="text-sm mb-8" style={{ color: "#024D60" }}>
          Read this slowly. Let it settle. Breathe it in.
        </p>
      </div>

      <button
        onClick={getNext}
        className="clay-button px-8 py-4 text-white font-medium flex items-center gap-3 mx-auto"
      >
        <RefreshCw className="w-5 h-5" />
        Next Affirmation
      </button>

      <div className="mt-12 clay-card p-6" style={{ background: "rgba(217, 245, 240, 0.5)" }}>
        <p className="text-sm leading-relaxed" style={{ color: "#1C4E47" }}>
          💗 Come back to these whenever you need a reminder.
          Your truth is unchangeable, no matter what anyone says.
        </p>
      </div>
    </div>
  );
}
