export type Option<TValue extends string | undefined> = {
  id: string;
  value: TValue;
};

export type SelectProps<TValue extends string | undefined> = {
  initialOption?: Option<TValue>;
  options: ReadonlyArray<Option<TValue>>;
} & JSX.IntrinsicElements["select"];
