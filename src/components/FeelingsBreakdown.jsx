import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export default function FeelingsBreakdown({ onClose }) {
  const [overwhelming, setOverwhelming] = useState("");
  const [pieces, setPieces] = useState([]);
  const [newPiece, setNewPiece] = useState("");

  const handleAddPiece = () => {
    if (newPiece.trim()) {
      setPieces([...pieces, newPiece.trim()]);
      setNewPiece("");
    }
  };

  const removePiece = (index) => {
    setPieces(pieces.filter((_, i) => i !== index));
  };

  return (
    <div className="clay-card p-12 lily-bloom max-w-2xl mx-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full transition-all"
        style={{ background: "rgba(242, 218, 215, 0.3)" }}
      >
        <X className="w-6 h-6" style={{ color: "#537E72" }} />
      </button>

      <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#122B1D" }}>
        Break It Down
      </h2>
      <p className="text-center mb-8" style={{ color: "#537E72" }}>
        When feelings are overwhelming, breaking them into pieces makes them manageable.
      </p>

      {/* Step 1: Name the overwhelming feeling */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-3" style={{ color: "#122B1D" }}>
          What feels overwhelming right now?
        </label>
        <textarea
          value={overwhelming}
          onChange={(e) => setOverwhelming(e.target.value)}
          placeholder="I feel completely overwhelmed by..."
          className="clay-input w-full px-6 py-4 min-h-24"
          style={{ color: "#122B1D" }}
        />
      </div>

      {/* Step 2: Break it down */}
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-3" style={{ color: "#122B1D" }}>
          Let's break that down into smaller pieces:
        </label>
        <p className="text-sm mb-4" style={{ color: "#537E72" }}>
          What specific things are contributing to this feeling?
        </p>

        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={newPiece}
            onChange={(e) => setNewPiece(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddPiece()}
            placeholder="Add one specific thing..."
            className="clay-input flex-1 px-4 py-3"
            style={{ color: "#122B1D" }}
          />
          <button
            onClick={handleAddPiece}
            className="clay-button px-6 py-3 text-white font-medium"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {pieces.length > 0 && (
          <div className="space-y-3">
            {pieces.map((piece, index) => (
              <div
                key={index}
                className="clay-card p-4 flex items-start justify-between gap-3"
                style={{ background: "linear-gradient(145deg, #CDDECB, #CDDECB)" }}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(145deg, #9CC97F, #537E72)",
                      boxShadow: "4px 4px 8px rgba(183, 105, 13, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.6)"
                    }}
                  >
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p style={{ color: "#122B1D" }}>{piece}</p>
                </div>
                <button
                  onClick={() => removePiece(index)}
                  className="p-2 rounded-full transition-all hover:bg-[#9CC97F]/10"
                >
                  <Trash2 className="w-4 h-4" style={{ color: "#537E72" }} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reflection */}
      {pieces.length > 0 && (
        <div className="clay-card p-6" style={{ background: "rgba(242, 218, 215, 0.3)" }}>
          <h4 className="font-semibold mb-3" style={{ color: "#122B1D" }}>
            See? It's not one big thing.
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: "#537E72" }}>
            You've identified {pieces.length} specific {pieces.length === 1 ? 'piece' : 'pieces'}.
            Each one can be addressed separately. You don't have to solve everything at once.
            Pick one piece to focus on first.
          </p>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm" style={{ color: "#537E72" }}>
          💗 Breaking things down makes them less scary. You've got this.
        </p>
      </div>
    </div>
  );
}
