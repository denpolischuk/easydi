import { GlobalStore } from "./store";

const inject: (name: string) => PropertyDecorator =
  (name: string): PropertyDecorator =>
  (target: any, propertyKey: string): any => {
    const resource: any = GlobalStore.fetch(name);

    if (!resource) {
      GlobalStore.reserve(target, propertyKey, name);
    } else {
      target[propertyKey as string] = resource;
    }

    return target[propertyKey as string];
  };

export { inject as Inject };
