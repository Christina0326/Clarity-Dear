// CheckIn entity for managing daily check-ins
export class CheckIn {
  constructor(data) {
    this.id = data.id || Date.now();
    this.created_date = data.created_date || new Date().toISOString();
    this.mood = data.mood || null;
    this.notes = data.notes || '';
  }

  static async list() {
    // Get check-ins from localStorage
    const stored = localStorage.getItem('checkIns');
    if (!stored) return [];

    try {
      const data = JSON.parse(stored);
      return data.map(item => new CheckIn(item));
    } catch (e) {
      console.error('Error parsing check-ins:', e);
      return [];
    }
  }

  static async save(checkIn) {
    const checkIns = await CheckIn.list();
    const existing = checkIns.findIndex(c => c.id === checkIn.id);

    if (existing >= 0) {
      checkIns[existing] = checkIn;
    } else {
      checkIns.push(checkIn);
    }

    localStorage.setItem('checkIns', JSON.stringify(checkIns));
    return checkIn;
  }

  static async delete(id) {
    const checkIns = await CheckIn.list();
    const filtered = checkIns.filter(c => c.id !== id);
    localStorage.setItem('checkIns', JSON.stringify(filtered));
  }
}
