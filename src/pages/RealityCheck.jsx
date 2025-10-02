import React, { useState } from "react";
import { AlertCircle, Check, X } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function RealityCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "dismissed",
      question: "Did they dismiss or minimize your feelings?",
      example: 'Like saying "You\'re too sensitive" or "You\'re overreacting"'
    },
    {
      id: "memory",
      question: "Are you questioning your memory of what happened?",
      example: 'They said "That never happened" when you know it did'
    },
    {
      id: "eggshells",
      question: "Do you feel like you're walking on eggshells around them?",
      example: "Constantly worrying about their reaction"
    },
    {
      id: "blame",
      question: "Did they blame you for their behavior or emotions?",
      example: '"You made me do this" or "Look what you made me do"'
    },
    {
      id: "excuses",
      question: "Are you making excuses for their behavior?",
      example: '"They\'re just stressed" or "They didn\'t mean it"'
    },
    {
      id: "apologize",
      question: "Do you find yourself apologizing even when you didn't do anything wrong?",
      example: "Saying sorry just to keep the peace"
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getResultMessage = () => {
    const yesCount = Object.values(answers).filter(a => a === true).length;

    if (yesCount >= 4) {
      return {
        title: "Your Feelings Are Valid",
        message: "Multiple red flags are present. This is not normal, healthy communication. You're not overreacting—you're recognizing concerning patterns. Consider documenting these incidents and reaching out for support.",
        severity: "high"
      };
    } else if (yesCount >= 2) {
      return {
        title: "Trust Your Instincts",
        message: "Some concerning patterns are showing up. Your feelings matter, and these behaviors shouldn't be dismissed. Keep paying attention to how interactions make you feel.",
        severity: "medium"
      };
    } else {
      return {
        title: "You're Aware",
        message: "While some concerns exist, staying aware is important. Continue trusting your perceptions and feelings. If things change or escalate, come back anytime.",
        severity: "low"
      };
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const result = getResultMessage();
    const yesCount = Object.values(answers).filter(a => a === true).length;
    const totalAnswered = Object.keys(answers).length;

    return (
      <div className="max-w-3xl mx-auto lily-bloom">
        <div className="clay-card p-8 mb-6">
          <div className="text-center mb-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 lily-float"
              style={{
                background: result.severity === "high" ? "#E8A89A" : result.severity === "medium" ? "#F5E6D3" : "#C8D5B9",
                boxShadow: "6px 6px 12px rgba(107, 130, 104, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)"
              }}
            >
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#6B8268" }}>
              {result.title}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#A8B5A0" }}>
              {result.message}
            </p>

            <div className="inline-block clay-card px-8 py-4 mb-8">
              <div className="text-sm mb-1" style={{ color: "#A8B5A0" }}>You answered "yes" to</div>
              <div className="text-4xl font-bold" style={{ color: "#6B8268" }}>
                {yesCount} / {totalAnswered}
              </div>
              <div className="text-sm mt-1" style={{ color: "#A8B5A0" }}>questions</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="clay-card p-6" style={{ background: "linear-gradient(145deg, #F5E6D3, #E8D4B8)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "#6B8268" }}>
                Remember:
              </h3>
              <ul className="space-y-2" style={{ color: "#A8B5A0" }}>
                <li>• You're not imagining things</li>
                <li>• Your feelings are valid</li>
                <li>• You deserve respect</li>
                <li>• It's okay to trust yourself</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="clay-button flex-1 py-4 px-6 text-white font-medium"
            >
              Take Again
            </button>
            <Link
              to={createPageUrl("Journal")}
              className="clay-button flex-1 py-4 px-6 text-white font-medium text-center"
            >
              Write in Journal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto lily-bloom">
      <div className="clay-card p-8 mb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#6B8268" }}>
            Daily Reflection
          </h1>
          <p className="text-lg" style={{ color: "#A8B5A0" }}>
            Take a moment to check in with how you're feeling. Answer honestly—this is just for you.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2" style={{ color: "#A8B5A0" }}>
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{ background: "rgba(168, 181, 160, 0.2)" }}
          >
            <div
              className="h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
                background: "linear-gradient(90deg, #A8B5A0, #C8D5B9)"
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8 lily-bloom">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#6B8268" }}>
            {questions[currentStep].question}
          </h2>
          <p className="text-sm clay-card p-4" style={{
            color: "#A8B5A0",
            background: "rgba(245, 230, 211, 0.3)"
          }}>
            {questions[currentStep].example}
          </p>
        </div>

        {/* Answer Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="clay-card p-6 text-center transition-all hover:scale-105"
          >
            <Check className="w-8 h-8 mx-auto mb-3" style={{ color: "#E8A89A" }} />
            <div className="font-semibold text-lg" style={{ color: "#6B8268" }}>Yes</div>
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="clay-card p-6 text-center transition-all hover:scale-105"
          >
            <X className="w-8 h-8 mx-auto mb-3" style={{ color: "#A8B5A0" }} />
            <div className="font-semibold text-lg" style={{ color: "#6B8268" }}>No</div>
          </button>
        </div>
      </div>

      {/* Supportive Message */}
      <div className="clay-card p-6 text-center" style={{ background: "linear-gradient(145deg, #F4E8E9, #D4E4E8)" }}>
        <p className="text-sm" style={{ color: "#6B8268" }}>
          💚 Take your time. These questions are here to help you reflect.
        </p>
      </div>
    </div>
  );
}
