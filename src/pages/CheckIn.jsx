import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckIn } from "@/entities/CheckIn";
import { Smile, Meh, Frown, Heart, AlertCircle } from "lucide-react";

export default function CheckInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    check_in_type: "morning",
    mood: "",
    self_trust_level: 5,
    questioned_reality_today: false,
    made_excuses_for_them: false,
    felt_like_yourself: false,
    notes: ""
  });

  const checkboxStyle = {
    accentColor: "#2CACAD",
    border: "2px solid #1C4E47",
    outline: "none"
  };

  const rangeStyle = `
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
    }

    input[type="range"]::-webkit-slider-track {
      background: linear-gradient(90deg, #1C4E47, #2CACAD);
      height: 8px;
      border-radius: 10px;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: #2CACAD;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      border: 3px solid #FFFFFF;
      box-shadow: 0 2px 8px rgba(44, 172, 173, 0.4);
    }

    input[type="range"]::-moz-range-track {
      background: linear-gradient(90deg, #1C4E47, #2CACAD);
      height: 8px;
      border-radius: 10px;
    }

    input[type="range"]::-moz-range-thumb {
      background: #2CACAD;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      border: 3px solid #FFFFFF;
      box-shadow: 0 2px 8px rgba(44, 172, 173, 0.4);
    }

    input[type="checkbox"] {
      border: 2px solid #1C4E47;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      background-color: #2CACAD;
      border-color: #2CACAD;
    }
  `;

  const moods = [
    { value: "peaceful", label: "Peaceful", icon: Smile, color: "#D9F5F0" },
    { value: "hopeful", label: "Hopeful", icon: Heart, color: "#76E2E0" },
    { value: "neutral", label: "Neutral", icon: Meh, color: "#90B7BF" },
    { value: "anxious", label: "Anxious", icon: AlertCircle, color: "#2CACAD" },
    { value: "overwhelmed", label: "Overwhelmed", icon: AlertCircle, color: "#024D60" },
    { value: "sad", label: "Sad", icon: Frown, color: "#1C4E47" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CheckIn.create(formData);
    navigate(createPageUrl("Home"));
  };

  return (
    <div className="max-w-3xl mx-auto wave-rise">
      <style>{rangeStyle}</style>
      <div className="clay-card p-8 mb-6" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#1C4E47" }}>
          Daily Check-In
        </h1>
        <p className="text-lg" style={{ color: "#024D60" }}>
          Take a moment to check in with yourself. This is just for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="clay-card p-8 space-y-8">
        {/* Mood Selection */}
        <div>
          <label className="block text-lg font-medium mb-4" style={{ color: "#1C4E47" }}>
            How are you feeling right now?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moods.map((mood) => {
              const Icon = mood.icon;
              return (
                <button
                  key={mood.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, mood: mood.value })}
                  className="p-6 rounded-2xl transition-all"
                  style={{
                    background: formData.mood === mood.value
                      ? `linear-gradient(145deg, ${mood.color}, ${mood.color}dd)`
                      : "rgba(217, 245, 240, 0.5)",
                    color: formData.mood === mood.value ? "#FFFFFF" : "#1C4E47",
                    boxShadow: formData.mood === mood.value
                      ? "6px 6px 12px rgba(28, 78, 71, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.6)"
                      : "none"
                  }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-medium">{mood.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Self-Trust Level */}
        <div>
          <label className="block text-lg font-medium mb-4" style={{ color: "#1C4E47" }}>
            How much do you trust yourself right now? (1-10)
          </label>
          <div className="clay-card p-6">
            <input
              type="range"
              min="1"
              max="10"
              value={formData.self_trust_level}
              onChange={(e) => setFormData({ ...formData, self_trust_level: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2" style={{ color: "#024D60" }}>
              <span>Not at all</span>
              <span className="text-4xl font-bold" style={{ color: "#1C4E47" }}>
                {formData.self_trust_level}
              </span>
              <span>Completely</span>
            </div>
          </div>
        </div>

        {/* Yes/No Questions */}
        <div className="space-y-4">
          <div className="clay-card p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.questioned_reality_today}
                onChange={(e) => setFormData({ ...formData, questioned_reality_today: e.target.checked })}
                className="w-5 h-5 rounded"
              />
              <span className="font-medium" style={{ color: "#1C4E47" }}>
                Did you question your reality today?
              </span>
            </label>
          </div>

          <div className="clay-card p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.made_excuses_for_them}
                onChange={(e) => setFormData({ ...formData, made_excuses_for_them: e.target.checked })}
                className="w-5 h-5 rounded"
              />
              <span className="font-medium" style={{ color: "#1C4E47" }}>
                Did you make excuses for someone's behavior?
              </span>
            </label>
          </div>

          <div className="clay-card p-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.felt_like_yourself}
                onChange={(e) => setFormData({ ...formData, felt_like_yourself: e.target.checked })}
                className="w-5 h-5 rounded"
              />
              <span className="font-medium" style={{ color: "#1C4E47" }}>
                Did you feel like yourself today?
              </span>
            </label>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-lg font-medium mb-4" style={{ color: "#1C4E47" }}>
            Anything else on your mind? (optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Write whatever feels important..."
            className="clay-input w-full px-4 py-3 min-h-24"
            style={{ color: "#1C4E47" }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="clay-button w-full py-4 text-white font-medium text-lg"
          disabled={!formData.mood}
        >
          Complete Check-In
        </button>
      </form>

      <div className="clay-card p-6 mt-6 text-center" style={{ background: "linear-gradient(145deg, rgba(118, 226, 224, 0.4), rgba(44, 172, 173, 0.3))" }}>
        <p className="text-sm font-medium" style={{ color: "#1C4E47" }}>
          💗 Thank you for taking time to check in with yourself. Your feelings matter.
        </p>
      </div>
    </div>
  );
}
