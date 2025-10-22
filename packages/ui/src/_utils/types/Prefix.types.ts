export type Prefix<
  _Prefix extends string,
  Texts extends string
> = `${_Prefix}${Texts}`;
