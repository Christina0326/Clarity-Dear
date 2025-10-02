// JournalEntry entity for managing journal entries
export class JournalEntry {
  constructor(data) {
    this.id = data.id || Date.now();
    this.created_date = data.created_date || new Date().toISOString();
    this.updated_date = data.updated_date || new Date().toISOString();
    this.title = data.title || '';
    this.content = data.content || '';
    this.tags = data.tags || [];
    this.mood = data.mood || null;
  }

  static async list(sortBy = "-created_date") {
    // Get entries from localStorage
    const stored = localStorage.getItem('journalEntries');
    if (!stored) return [];

    try {
      const data = JSON.parse(stored);
      let entries = data.map(item => new JournalEntry(item));

      // Sort entries
      if (sortBy === "-created_date") {
        entries.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
      } else if (sortBy === "created_date") {
        entries.sort((a, b) => new Date(a.created_date) - new Date(b.created_date));
      }

      return entries;
    } catch (e) {
      console.error('Error parsing journal entries:', e);
      return [];
    }
  }

  static async create(entryData) {
    const entry = new JournalEntry(entryData);
    const entries = await JournalEntry.list();
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    return entry;
  }

  static async update(id, entryData) {
    const entries = await JournalEntry.list();
    const index = entries.findIndex(e => e.id === id);

    if (index >= 0) {
      entries[index] = new JournalEntry({
        ...entries[index],
        ...entryData,
        id,
        updated_date: new Date().toISOString()
      });
      localStorage.setItem('journalEntries', JSON.stringify(entries));
      return entries[index];
    }
    return null;
  }

  static async delete(id) {
    const entries = await JournalEntry.list();
    const filtered = entries.filter(e => e.id !== id);
    localStorage.setItem('journalEntries', JSON.stringify(filtered));
  }

  static async get(id) {
    const entries = await JournalEntry.list();
    return entries.find(e => e.id === id) || null;
  }
}
