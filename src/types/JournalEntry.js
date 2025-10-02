/**
 * Journal Entry Schema
 *
 * Used for documenting incidents and tracking patterns in relationships
 */

export const JournalEntrySchema = {
  "name": "JournalEntry",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Brief title for the entry"
    },
    "what_happened": {
      "type": "string",
      "description": "Description of the incident"
    },
    "what_they_said": {
      "type": "string",
      "description": "Exact words they used"
    },
    "how_i_felt": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "anxious",
          "confused",
          "angry",
          "sad",
          "scared",
          "guilty",
          "ashamed",
          "numb",
          "hopeful",
          "validated"
        ]
      },
      "description": "Emotions experienced"
    },
    "red_flags": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Manipulation tactics identified"
    },
    "has_happened_before": {
      "type": "boolean",
      "description": "Whether this is a recurring pattern"
    },
    "severity": {
      "type": "string",
      "enum": [
        "mild",
        "moderate",
        "severe"
      ],
      "description": "Severity of the incident"
    }
  },
  "required": [
    "what_happened"
  ]
};

// Helper function to create a new journal entry
export const createJournalEntry = (data) => {
  return {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    title: data.title || "",
    what_happened: data.what_happened,
    what_they_said: data.what_they_said || "",
    how_i_felt: data.how_i_felt || [],
    red_flags: data.red_flags || [],
    has_happened_before: data.has_happened_before || false,
    severity: data.severity || "mild"
  };
};

// Available emotions
export const EMOTIONS = [
  "anxious",
  "confused",
  "angry",
  "sad",
  "scared",
  "guilty",
  "ashamed",
  "numb",
  "hopeful",
  "validated"
];

// Severity levels
export const SEVERITY_LEVELS = ["mild", "moderate", "severe"];
