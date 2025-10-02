type SwitchOnChangeEvent = (checked: boolean) => void;

export type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: SwitchOnChangeEvent;
  disabled?: boolean;
};
