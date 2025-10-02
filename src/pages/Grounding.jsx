import React, { useState } from "react";
import { Heart, Flower2, Sparkles, Cloud, Layers } from "lucide-react";
import BreathingExercise from "../components/grounding/BreathingExercise";
import SensoryGrounding from "../components/grounding/SensoryGrounding";
import Affirmations from "../components/grounding/Affirmations";
import BodyScanMeditation from "../components/grounding/BodyScanMeditation";
import FeelingsBreakdown from "../components/grounding/FeelingsBreakdown";
import BoxBreathing from "../components/grounding/BoxBreathing";

export default function Grounding() {
  const [activeExercise, setActiveExercise] = useState(null);

  const exercises = [
    {
      id: "box",
      title: "Box Breathing",
      description: "4-4-4-4 breathing used by Navy SEALs to stay calm",
      icon: Layers,
      color: "#81D4FA",
      component: BoxBreathing
    },
    {
      id: "breathing",
      title: "Lily Breathing",
      description: "Calm your nervous system with guided breathing",
      icon: Flower2,
      color: "#FFB6C1",
      component: BreathingExercise
    },
    {
      id: "sensory",
      title: "5-4-3-2-1 Grounding",
      description: "Ground yourself through the five senses",
      icon: Sparkles,
      color: "#A5D6A7",
      component: SensoryGrounding
    },
    {
      id: "bodyscan",
      title: "Morning Dew Meditation",
      description: "Short calming body scan meditation",
      icon: Cloud,
      color: "#D4E4E8",
      component: BodyScanMeditation
    },
    {
      id: "feelings",
      title: "Petal by Petal",
      description: "Break overwhelming feelings into manageable pieces",
      icon: Heart,
      color: "#FFD54F",
      component: FeelingsBreakdown
    },
    {
      id: "affirmations",
      title: "Affirmations",
      description: "Gentle reminders of your truth",
      icon: Sparkles,
      color: "#FF8A80",
      component: Affirmations
    }
  ];

  if (activeExercise) {
    const ExerciseComponent = exercises.find(e => e.id === activeExercise).component;
    return (
      <div className="max-w-4xl">
        <ExerciseComponent onClose={() => setActiveExercise(null)} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl lily-bloom">
      <div className="clay-card p-8 mb-8">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#558B2F" }}>
          Grounding Exercises
        </h1>
        <p className="text-lg" style={{ color: "#7CB342" }}>
          When you feel overwhelmed, these exercises can help you return to yourself.
          Take your time, breathe deeply.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {exercises.map((exercise) => {
          const Icon = exercise.icon;
          return (
            <button
              key={exercise.id}
              onClick={() => setActiveExercise(exercise.id)}
              className="clay-card p-8 text-center transition-all hover:scale-105"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 lily-float"
                style={{
                  background: `linear-gradient(145deg, ${exercise.color}, ${exercise.color}dd)`,
                  boxShadow: "8px 8px 16px rgba(85, 139, 47, 0.25), -6px -6px 12px rgba(255, 255, 255, 0.7)"
                }}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#558B2F" }}>
                {exercise.title}
              </h3>
              <p style={{ color: "#7CB342" }}>{exercise.description}</p>
            </button>
          );
        })}
      </div>

      {/* Emergency Resources */}
      <div className="clay-card p-8 mt-8" style={{ background: "linear-gradient(145deg, #FFD54F, #FFB74D)" }}>
        <h3 className="text-xl font-semibold mb-4 text-white">
          Need immediate help?
        </h3>
        <div className="space-y-3">
          <a
            href="tel:1-800-799-7233"
            className="clay-button block py-3 px-6 text-center text-white font-medium"
          >
            National Domestic Violence Hotline: 1-800-799-7233
          </a>
          <p className="text-sm text-center text-white">
            Available 24/7. Confidential support.
          </p>
        </div>
      </div>
    </div>
  );
}
