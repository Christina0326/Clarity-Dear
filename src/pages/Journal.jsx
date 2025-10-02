import React, { useState, useEffect } from "react";
import { Plus, Calendar, Tag } from "lucide-react";
import { JournalEntry } from "@/entities/JournalEntry";
import JournalEntryForm from "../components/journal/JournalEntryForm";
import JournalEntryCard from "../components/journal/JournalEntryCard";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await JournalEntry.list("-created_date");
    setEntries(data);
  };

  const handleSave = async (entryData) => {
    if (editingEntry) {
      await JournalEntry.update(editingEntry.id, entryData);
    } else {
      await JournalEntry.create(entryData);
    }
    setShowForm(false);
    setEditingEntry(null);
    loadEntries();
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this entry?")) {
      await JournalEntry.delete(id);
      loadEntries();
    }
  };

  return (
    <div className="max-w-4xl lily-bloom">
      <div className="clay-card p-8 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#6B8268" }}>
              Private Journal
            </h1>
            <p className="text-lg" style={{ color: "#A8B5A0" }}>
              Document your experiences. Your truth matters.
            </p>
          </div>
          <button
            onClick={() => {
              setEditingEntry(null);
              setShowForm(true);
            }}
            className="clay-button px-6 py-3 text-white font-medium flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Entry
          </button>
        </div>
      </div>

      {showForm && (
        <JournalEntryForm
          entry={editingEntry}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingEntry(null);
          }}
        />
      )}

      {!showForm && entries.length === 0 && (
        <div className="clay-card p-12 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4 lily-float" style={{ color: "#A8B5A0" }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#6B8268" }}>
            Start Your First Entry
          </h3>
          <p className="mb-6" style={{ color: "#A8B5A0" }}>
            Document what happened. Patterns become clearer over time.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="clay-button px-8 py-3 text-white font-medium"
          >
            Create Entry
          </button>
        </div>
      )}

      {!showForm && entries.length > 0 && (
        <div className="space-y-4">
          {entries.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              entry={entry}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
