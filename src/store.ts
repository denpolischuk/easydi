interface Reserved {
  propertyKey: string;
  request: string;
  target: any;
}

const store = new Map<string, any>();
const requested = new Map<string, Reserved>();

export class GlobalStore {
  private static Store: Map<string, any> = store;
  private static Requested: Map<string, Reserved> = requested;

  static reserve(target: any, propertyKey: string, request: string): void {
    GlobalStore.Requested.set(request.toUpperCase(), {
      propertyKey,
      request,
      target,
    });
  }

  static fetch(key: string) {
    return GlobalStore.Store.get(key);
  }

  static register(key: string, bean: any): void {
    if (GlobalStore.Requested.has(key.toUpperCase())) {
      GlobalStore.Requested.get(key.toUpperCase()).target[
        GlobalStore.Requested.get(key.toUpperCase()).propertyKey
      ] = bean;
    }

    if (GlobalStore.Store.has(key.toUpperCase())) {
      throw new Error(`${key.toUpperCase()} already registered`);
    }

    GlobalStore.Store.set(key.toUpperCase(), bean);
  }

  static remove(key: string) {
    return GlobalStore.Store.delete(key);
  }
}
