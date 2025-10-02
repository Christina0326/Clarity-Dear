import React, { useState } from "react";
import { X, Eye, Ear, Hand, Wind, Coffee } from "lucide-react";

export default function SensoryGrounding({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});

  const steps = [
    {
      sense: "See",
      icon: Eye,
      prompt: "Name 5 things you can see around you",
      count: 5,
      color: "#C8D5B9",
      example: "The color of the wall, a plant, your phone, etc."
    },
    {
      sense: "Touch",
      icon: Hand,
      prompt: "Name 4 things you can touch",
      count: 4,
      color: "#D4E4E8",
      example: "The texture of your clothes, the ground beneath you, etc."
    },
    {
      sense: "Hear",
      icon: Ear,
      prompt: "Name 3 things you can hear",
      count: 3,
      color: "#F4E8E9",
      example: "Birds chirping, traffic, your breathing, etc."
    },
    {
      sense: "Smell",
      icon: Wind,
      prompt: "Name 2 things you can smell",
      count: 2,
      color: "#F5E6D3",
      example: "Coffee, fresh air, soap, etc."
    },
    {
      sense: "Taste",
      icon: Coffee,
      prompt: "Name 1 thing you can taste",
      count: 1,
      color: "#E8D4B8",
      example: "The taste in your mouth, tea, gum, etc."
    }
  ];

  const currentPrompt = steps[currentStep];
  const Icon = currentPrompt.icon;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const isComplete = currentStep === steps.length - 1 && responses[currentStep]?.length > 0;

  return (
    <div className="clay-card p-12 lily-bloom max-w-2xl mx-auto relative">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(168, 181, 160, 0.1)" }}
      >
        <X className="w-6 h-6" style={{ color: "#6B8268" }} />
      </button>

      <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#6B8268" }}>
        Garden Walk Grounding
      </h2>
      <p className="text-center mb-8" style={{ color: "#A8B5A0" }}>
        Step {currentStep + 1} of 5
      </p>

      {/* Progress */}
      <div className="mb-12">
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(168, 181, 160, 0.2)" }}
        >
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              background: `linear-gradient(90deg, ${currentPrompt.color}, ${currentPrompt.color}dd)`
            }}
          />
        </div>
      </div>

      {/* Sense Icon */}
      <div className="mb-8">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto lily-float"
          style={{
            background: `linear-gradient(145deg, ${currentPrompt.color}, ${currentPrompt.color}dd)`,
            boxShadow: "8px 8px 16px rgba(107, 130, 104, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)"
          }}
        >
          <Icon className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Prompt */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-3" style={{ color: "#6B8268" }}>
          {currentPrompt.prompt}
        </h3>
        <p className="text-sm clay-card inline-block px-4 py-2" style={{
          color: "#A8B5A0",
          background: `${currentPrompt.color}22`
        }}>
          {currentPrompt.example}
        </p>
      </div>

      {/* Input */}
      <textarea
        value={responses[currentStep] || ""}
        onChange={(e) => setResponses({ ...responses, [currentStep]: e.target.value })}
        placeholder="Take your time... notice each detail"
        className="clay-input w-full px-6 py-4 min-h-32 mb-6"
        style={{ color: "#6B8268" }}
      />

      {/* Navigation */}
      <div className="flex gap-4">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="flex-1 py-3 px-6 rounded-2xl font-medium transition-all"
            style={{
              background: "rgba(168, 181, 160, 0.1)",
              color: "#6B8268"
            }}
          >
            Previous
          </button>
        )}
        {!isComplete && (
          <button
            onClick={handleNext}
            className="clay-button flex-1 py-3 px-6 text-white font-medium"
            disabled={!responses[currentStep] || responses[currentStep].trim().length === 0}
          >
            Next
          </button>
        )}
        {isComplete && (
          <button
            onClick={onClose}
            className="clay-button flex-1 py-3 px-6 text-white font-medium"
          >
            Complete
          </button>
        )}
      </div>

      <div className="mt-8 text-center" style={{ color: "#A8B5A0" }}>
        <p className="text-sm">
          💚 You're bringing yourself back to the present moment.
          That takes courage.
        </p>
      </div>
    </div>
  );
}
