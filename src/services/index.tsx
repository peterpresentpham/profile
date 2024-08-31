export class LocalStorage {
  static get(key: string) {
    if (typeof window !== 'undefined') return localStorage.getItem(key);
    return null;
  }

  static set(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
      return true;
    }
    return false;
  }

  static remove(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
