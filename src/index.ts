const store = new Map<string, any>();

export class GlobalStore {
  private static Store: Map<string, any> = store;

  static fetch(key: string) {
    return GlobalStore.Store.get(key);
  }

  static register(key: string, bean: any) {
    return GlobalStore.Store.set(key, bean);
  }

  static remove(key: string) {
    return GlobalStore.Store.delete(key);
  }
}
