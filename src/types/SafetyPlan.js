/**
 * Safety Plan Schema
 *
 * Used for creating and managing emergency safety plans
 */

export const SafetyPlanSchema = {
  "name": "SafetyPlan",
  "type": "object",
  "properties": {
    "safe_contacts": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "relationship": {
            "type": "string"
          }
        }
      },
      "description": "People who can help"
    },
    "safe_places": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Safe locations to go"
    },
    "important_documents": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Documents to gather"
    },
    "items_to_pack": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Essential items checklist"
    },
    "financial_steps": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Financial preparation steps"
    },
    "timeline_notes": {
      "type": "string",
      "description": "Timeline and planning notes"
    }
  },
  "required": []
};

// Helper function to create a new safety plan
export const createSafetyPlan = (data = {}) => {
  return {
    id: Date.now().toString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    safe_contacts: data.safe_contacts || [],
    safe_places: data.safe_places || [],
    important_documents: data.important_documents || [],
    items_to_pack: data.items_to_pack || [],
    financial_steps: data.financial_steps || [],
    timeline_notes: data.timeline_notes || ""
  };
};

// Helper function to create a contact
export const createContact = (name = "", phone = "", relationship = "") => {
  return {
    id: Date.now().toString() + Math.random(),
    name,
    phone,
    relationship
  };
};

// Default important documents checklist
export const DEFAULT_DOCUMENTS = [
  "ID/Driver's License",
  "Social Security Card",
  "Birth Certificate",
  "Passport",
  "Insurance Cards",
  "Bank Account Information",
  "Credit Cards",
  "Lease/Mortgage Documents",
  "Car Title/Registration",
  "Medical Records",
  "Children's Documents",
  "Pet Records"
];

// Default items to pack
export const DEFAULT_ITEMS = [
  "Medications",
  "Phone & Charger",
  "Cash",
  "Spare Keys",
  "Change of Clothes",
  "Toiletries",
  "Important Photos",
  "Valuables",
  "Journal/Evidence"
];

// Default financial steps
export const DEFAULT_FINANCIAL_STEPS = [
  "Open separate bank account",
  "Change passwords on accounts",
  "Set up direct deposit to new account",
  "Save emergency cash",
  "Review credit report",
  "Document shared assets",
  "Consult with attorney about finances"
];
