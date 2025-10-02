import React, { useState } from "react";
import { X, Heart, Layers, Check } from "lucide-react";

export default function FeelingsBreakdown({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});

  const steps = [
    {
      title: "Name the Feeling",
      prompt: "What's the big overwhelming feeling right now?",
      placeholder: "I feel overwhelmed, anxious, hurt, confused...",
      color: "#FFD54F"
    },
    {
      title: "Where Do You Feel It?",
      prompt: "Where in your body do you notice this feeling?",
      placeholder: "Tightness in my chest, knot in my stomach, tension in my shoulders...",
      color: "#A5D6A7"
    },
    {
      title: "What Triggered It?",
      prompt: "What happened right before you felt this way?",
      placeholder: "They said something, I saw a text, I remembered...",
      color: "#81D4FA"
    },
    {
      title: "What Does It Remind You Of?",
      prompt: "Does this feeling remind you of other times?",
      placeholder: "This reminds me of when...",
      color: "#FFB6C1"
    },
    {
      title: "What Do You Need Right Now?",
      prompt: "What would help you feel safer or calmer?",
      placeholder: "Space, someone to talk to, to write, to breathe...",
      color: "#CE93D8"
    },
    {
      title: "One Small Step",
      prompt: "What's one tiny thing you can do for yourself right now?",
      placeholder: "Drink water, step outside, text a friend, take 3 deep breaths...",
      color: "#C8D5B9"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleResponseChange = (value) => {
    setResponses({ ...responses, [currentStep]: value });
  };

  const isComplete = currentStep === steps.length - 1 && responses[currentStep];
  const step = steps[currentStep];

  return (
    <div className="clay-card p-8 lily-bloom">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#558B2F" }}>
            Petal by Petal
          </h2>
          <p style={{ color: "#7CB342" }}>
            Break down overwhelming feelings into smaller, manageable pieces
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
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(168, 181, 160, 0.2)" }}
        >
          <div
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              background: `linear-gradient(90deg, ${step.color}, ${step.color}dd)`
            }}
          />
        </div>
      </div>

      {/* Icon */}
      <div className="text-center mb-8">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 lily-float"
          style={{
            background: `linear-gradient(145deg, ${step.color}, ${step.color}dd)`,
            boxShadow: "8px 8px 16px rgba(85, 139, 47, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.7)"
          }}
        >
          {currentStep === steps.length - 1 ? (
            <Heart className="w-10 h-10 text-white" />
          ) : (
            <Layers className="w-10 h-10 text-white" />
          )}
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#558B2F" }}>
          {step.title}
        </h3>
        <p className="text-lg" style={{ color: "#7CB342" }}>
          {step.prompt}
        </p>
      </div>

      {/* Input */}
      <div className="mb-8">
        <textarea
          value={responses[currentStep] || ""}
          onChange={(e) => handleResponseChange(e.target.value)}
          placeholder={step.placeholder}
          className="clay-input w-full px-4 py-4 text-lg min-h-[200px] resize-y"
          style={{ color: "#558B2F" }}
          autoFocus
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="px-6 py-3 rounded-xl font-medium transition-all"
            style={{
              background: "rgba(168, 181, 160, 0.2)",
              color: "#558B2F"
            }}
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="clay-button flex-1 py-3 text-white font-medium"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onClose}
            disabled={!responses[currentStep]}
            className="clay-button flex-1 py-3 text-white font-medium flex items-center justify-center gap-2"
            style={{
              opacity: responses[currentStep] ? 1 : 0.5
            }}
          >
            <Check className="w-5 h-5" />
            Complete
          </button>
        )}
      </div>

      {/* Info */}
      <div className="mt-8 clay-card p-6" style={{ background: `${step.color}22` }}>
        <h4 className="font-semibold mb-2" style={{ color: "#558B2F" }}>
          Why this helps:
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: "#7CB342" }}>
          When feelings are overwhelming, breaking them down helps you understand what's happening.
          Like peeling petals from a flower, each layer reveals something new. You're not trying to fix it all at once—just understand it, piece by piece.
        </p>
      </div>

      {/* Supportive Message */}
      {currentStep === 0 && (
        <div className="mt-4 text-center">
          <p className="text-sm italic" style={{ color: "#A8B5A0" }}>
            💚 Take your time. There are no wrong answers. This is just for you.
          </p>
        </div>
      )}
    </div>
  );
}
