export type CreateVarStore<T extends string> = {
  use: (key: T) => string;
  style: (vars: { [key in T]: string }) => string;
};
