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

  const moods = [
    { value: "peaceful", label: "Peaceful", icon: Smile, color: "#C8D5B9" },
    { value: "hopeful", label: "Hopeful", icon: Heart, color: "#D4E4E8" },
    { value: "neutral", label: "Neutral", icon: Meh, color: "#F5E6D3" },
    { value: "anxious", label: "Anxious", icon: AlertCircle, color: "#E8D4B8" },
    { value: "overwhelmed", label: "Overwhelmed", icon: AlertCircle, color: "#E8A89A" },
    { value: "sad", label: "Sad", icon: Frown, color: "#F4E8E9" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CheckIn.create(formData);
    navigate(createPageUrl("Home"));
  };

  return (
    <div className="max-w-3xl lily-bloom">
      <div className="clay-card p-8 mb-6">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#6B8268" }}>
          Daily Check-In
        </h1>
        <p className="text-lg" style={{ color: "#A8B5A0" }}>
          Take a moment to check in with yourself. This is just for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="clay-card p-8 space-y-8">
        {/* Mood Selection */}
        <div>
          <label className="block text-lg font-medium mb-4" style={{ color: "#6B8268" }}>
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
                      : "rgba(168, 181, 160, 0.1)",
                    color: formData.mood === mood.value ? "#FDFCFB" : "#6B8268",
                    boxShadow: formData.mood === mood.value
                      ? "6px 6px 12px rgba(107, 130, 104, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)"
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
          <label className="block text-lg font-medium mb-4" style={{ color: "#6B8268" }}>
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
              style={{ accentColor: "#C8D5B9" }}
            />
            <div className="flex justify-between text-sm mt-2" style={{ color: "#A8B5A0" }}>
              <span>Not at all</span>
              <span className="text-4xl font-bold" style={{ color: "#6B8268" }}>
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
                style={{ accentColor: "#C8D5B9" }}
              />
              <span className="font-medium" style={{ color: "#6B8268" }}>
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
                style={{ accentColor: "#C8D5B9" }}
              />
              <span className="font-medium" style={{ color: "#6B8268" }}>
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
                style={{ accentColor: "#C8D5B9" }}
              />
              <span className="font-medium" style={{ color: "#6B8268" }}>
                Did you feel like yourself today?
              </span>
            </label>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-lg font-medium mb-4" style={{ color: "#6B8268" }}>
            Anything else on your mind? (optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Write whatever feels important..."
            className="clay-input w-full px-4 py-3 min-h-24"
            style={{ color: "#6B8268" }}
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

      <div className="clay-card p-6 mt-6 text-center" style={{ background: "linear-gradient(145deg, #F4E8E9, #D4E4E8)" }}>
        <p className="text-sm" style={{ color: "#6B8268" }}>
          💚 Thank you for taking time to check in with yourself. Your feelings matter.
        </p>
      </div>
    </div>
  );
}
