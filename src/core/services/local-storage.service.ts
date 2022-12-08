class LocalStorageService {
  private _localStorage: Storage = window.localStorage;

  constructor() {}

  set(key: string, value: unknown): void {
    const item: string = JSON.stringify(value);
    this._localStorage.setItem(key, item);
  }

  get(key: string) {
    const value = this._localStorage.getItem(key);
    return JSON.parse(value || "{}");
  }

  remove(key: string): void {
    this._localStorage.removeItem(key);
  }
}

export { LocalStorageService };
