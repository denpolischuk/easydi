import { GlobalStore } from "./store";

const injectableIf =
  (
    condition: boolean,
    name: string,
    ...constructorArgs: any[]
  ): ClassDecorator =>
  (target: any): void => {
    if (condition) GlobalStore.register(name, new target(...constructorArgs));
  };

export { injectableIf as InjectableIf };
