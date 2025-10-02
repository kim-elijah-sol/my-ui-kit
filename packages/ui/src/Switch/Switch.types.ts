type SwitchOnChangeEvent = (checked: boolean) => void;

export type SwitchProps = {
  checked?: boolean;
  onChange?: SwitchOnChangeEvent;
  disabled?: boolean;
};
