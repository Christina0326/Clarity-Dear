import React, { useState } from "react";
import { Save, X } from "lucide-react";

export default function JournalEntryForm({ entry, onSave, onCancel }) {
  const [formData, setFormData] = useState(entry || {
    title: "",
    what_happened: "",
    what_they_said: "",
    how_i_felt: [],
    red_flags: [],
    has_happened_before: false,
    severity: "mild"
  });

  const emotions = [
    "anxious", "confused", "angry", "sad", "scared",
    "guilty", "ashamed", "numb", "hopeful", "validated"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const toggleEmotion = (emotion) => {
    setFormData(prev => ({
      ...prev,
      how_i_felt: prev.how_i_felt.includes(emotion)
        ? prev.how_i_felt.filter(e => e !== emotion)
        : [...prev.how_i_felt, emotion]
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="clay-card p-8 mb-6 space-y-6 lily-bloom">
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "#122B1D" }}>
          Title (optional)
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Brief title for this entry"
          className="clay-input w-full px-4 py-3"
          style={{ color: "#122B1D" }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "#122B1D" }}>
          What happened? *
        </label>
        <textarea
          value={formData.what_happened}
          onChange={(e) => setFormData({ ...formData, what_happened: e.target.value })}
          placeholder="Describe what happened in as much detail as you can..."
          className="clay-input w-full px-4 py-3 min-h-32"
          style={{ color: "#122B1D" }}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "#122B1D" }}>
          What exactly did they say?
        </label>
        <textarea
          value={formData.what_they_said}
          onChange={(e) => setFormData({ ...formData, what_they_said: e.target.value })}
          placeholder="Try to remember their exact words..."
          className="clay-input w-full px-4 py-3 min-h-24"
          style={{ color: "#122B1D" }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-3" style={{ color: "#122B1D" }}>
          How did this make you feel?
        </label>
        <div className="flex flex-wrap gap-2">
          {emotions.map(emotion => (
            <button
              key={emotion}
              type="button"
              onClick={() => toggleEmotion(emotion)}
              className="px-4 py-2 rounded-2xl font-medium transition-all capitalize"
              style={{
                background: formData.how_i_felt.includes(emotion)
                  ? "linear-gradient(145deg, #537E72, #537E72dd)"
                  : "rgba(168, 181, 160, 0.1)",
                color: formData.how_i_felt.includes(emotion) ? "#FDFCFB" : "#122B1D",
                boxShadow: formData.how_i_felt.includes(emotion)
                  ? "4px 4px 8px rgba(107, 130, 104, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.5)"
                  : "none"
              }}
            >
              {emotion}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3" style={{ color: "#122B1D" }}>
          Severity
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["mild", "moderate", "severe"].map(level => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({ ...formData, severity: level })}
              className="py-3 rounded-2xl font-medium capitalize transition-all"
              style={{
                background: formData.severity === level
                  ? "linear-gradient(145deg, #90B7BF, #122B1D)"
                  : "rgba(168, 181, 160, 0.1)",
                color: formData.severity === level ? "#FDFCFB" : "#122B1D",
                boxShadow: formData.severity === level
                  ? "4px 4px 8px rgba(107, 130, 104, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.5)"
                  : "none"
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 clay-card p-4">
        <input
          type="checkbox"
          id="repeated"
          checked={formData.has_happened_before}
          onChange={(e) => setFormData({ ...formData, has_happened_before: e.target.checked })}
          className="w-5 h-5 rounded"
        />
        <label htmlFor="repeated" className="font-medium cursor-pointer" style={{ color: "#122B1D" }}>
          This has happened before
        </label>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-6 rounded-2xl font-medium transition-all"
          style={{
            background: "rgba(168, 181, 160, 0.1)",
            color: "#122B1D"
          }}
        >
          <X className="w-5 h-5 inline mr-2" />
          Cancel
        </button>
        <button
          type="submit"
          className="clay-button flex-1 py-3 px-6 text-white font-medium"
        >
          <Save className="w-5 h-5 inline mr-2" />
          Save Entry
        </button>
      </div>
    </form>
  );
}
