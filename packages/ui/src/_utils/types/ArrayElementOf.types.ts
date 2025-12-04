export type ArrayElementOf<A extends readonly unknown[]>
  = A extends readonly (infer E)[] ? E : never;
