/**
 * Check-In Schema
 *
 * Used for regular self-assessment and tracking mental/emotional state
 */

export const CheckInSchema = {
  "name": "CheckIn",
  "type": "object",
  "properties": {
    "check_in_type": {
      "type": "string",
      "enum": [
        "morning",
        "evening",
        "weekly",
        "monthly"
      ],
      "description": "Type of check-in"
    },
    "mood": {
      "type": "string",
      "enum": [
        "peaceful",
        "hopeful",
        "neutral",
        "anxious",
        "overwhelmed",
        "sad"
      ],
      "description": "Current mood"
    },
    "self_trust_level": {
      "type": "number",
      "minimum": 1,
      "maximum": 10,
      "description": "How much you trust yourself (1-10)"
    },
    "questioned_reality_today": {
      "type": "boolean",
      "description": "Whether you questioned your perception today"
    },
    "made_excuses_for_them": {
      "type": "boolean",
      "description": "Whether you made excuses for their behavior"
    },
    "felt_like_yourself": {
      "type": "boolean",
      "description": "Whether you felt like yourself today"
    },
    "notes": {
      "type": "string",
      "description": "Additional notes"
    }
  },
  "required": [
    "check_in_type",
    "mood",
    "self_trust_level"
  ]
};

// Helper function to create a new check-in
export const createCheckIn = (data) => {
  return {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    check_in_type: data.check_in_type,
    mood: data.mood,
    self_trust_level: data.self_trust_level,
    questioned_reality_today: data.questioned_reality_today || false,
    made_excuses_for_them: data.made_excuses_for_them || false,
    felt_like_yourself: data.felt_like_yourself || false,
    notes: data.notes || ""
  };
};

// Available check-in types
export const CHECK_IN_TYPES = ["morning", "evening", "weekly", "monthly"];

// Available moods
export const MOODS = [
  "peaceful",
  "hopeful",
  "neutral",
  "anxious",
  "overwhelmed",
  "sad"
];

// Mood colors for UI
export const MOOD_COLORS = {
  peaceful: "#A5D6A7",
  hopeful: "#90CAF9",
  neutral: "#E0E0E0",
  anxious: "#FFCC80",
  overwhelmed: "#FFAB91",
  sad: "#B0BEC5"
};
