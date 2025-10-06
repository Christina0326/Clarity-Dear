import React, { useState } from "react";
import { Edit, Trash2, ChevronDown, ChevronUp, Calendar } from "lucide-react";

export default function JournalEntryCard({ entry, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="clay-card overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#122B1D" }}>
              {entry.title || "Journal Entry"}
            </h3>
            <div className="flex items-center gap-4 text-sm" style={{ color: "#122B1D" }}>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(entry.created_date).toLocaleDateString()}
              </span>
              <span className="px-3 py-1 rounded-full capitalize" style={{
                background: entry.severity === "severe" ? "rgba(232, 168, 154, 0.2)" :
                           entry.severity === "moderate" ? "rgba(245, 230, 211, 0.3)" :
                           "rgba(200, 213, 185, 0.2)"
              }}>
                {entry.severity}
              </span>
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: "#122B1D" }} />
          ) : (
            <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: "#122B1D" }} />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-6 lily-bloom">
          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#122B1D" }}>What happened:</h4>
            <p className="leading-relaxed" style={{ color: "#122B1D" }}>{entry.what_happened}</p>
          </div>

          {entry.what_they_said && (
            <div className="clay-card p-4" style={{ background: "rgba(245, 230, 211, 0.3)" }}>
              <h4 className="font-semibold mb-2" style={{ color: "#122B1D" }}>What they said:</h4>
              <p className="leading-relaxed" style={{ color: "#122B1D" }}>"{entry.what_they_said}"</p>
            </div>
          )}

          {entry.how_i_felt && entry.how_i_felt.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2" style={{ color: "#122B1D" }}>How I felt:</h4>
              <div className="flex flex-wrap gap-2">
                {entry.how_i_felt.map(emotion => (
                  <span
                    key={emotion}
                    className="px-3 py-1 rounded-full text-sm capitalize"
                    style={{
                      background: "rgba(232, 168, 154, 0.2)",
                      color: "#122B1D"
                    }}
                  >
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          )}

          {entry.has_happened_before && (
            <div className="clay-card p-4" style={{ background: "rgba(232, 168, 154, 0.1)" }}>
              <p className="text-sm font-medium" style={{ color: "#537E72" }}>
                ⚠️ This is a recurring pattern
              </p>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t" style={{ borderColor: "rgba(168, 181, 160, 0.1)" }}>
            <button
              onClick={() => onEdit(entry)}
              className="clay-button flex-1 py-2 px-4 text-white font-medium text-sm"
            >
              <Edit className="w-4 h-4 inline mr-2" />
              Edit
            </button>
            <button
              onClick={() => onDelete(entry.id)}
              className="flex-1 py-2 px-4 rounded-2xl font-medium text-sm transition-all"
              style={{
                background: "rgba(232, 168, 154, 0.2)",
                color: "#537E72"
              }}
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
