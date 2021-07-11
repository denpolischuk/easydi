import { GlobalStore } from "./store";

const injectable =
  (name: string, ...constructorArgs: any[]): ClassDecorator =>
  (target: any): void => {
    GlobalStore.register(name, new target(...constructorArgs));
  };
export { injectable as Injectable };
