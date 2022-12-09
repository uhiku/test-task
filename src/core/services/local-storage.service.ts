import { LSKeys, TLocalStorage } from "@core/shared";

class LocalStorageService {
  private _localStorage: Storage = window.localStorage;

  constructor() {}

  set<V extends keyof TLocalStorage>(key: V, value: TLocalStorage[V]): void {
    const item: string = JSON.stringify(value);
    this._localStorage.setItem(key, item);
  }

  get<V extends keyof TLocalStorage>(key: V): TLocalStorage[V] {
    const value = this._localStorage.getItem(key);
    return JSON.parse(value!); // or add condition
  }

  remove<V extends keyof TLocalStorage>(key: V): void {
    this._localStorage.removeItem(key);
  }
}

export { LocalStorageService };
