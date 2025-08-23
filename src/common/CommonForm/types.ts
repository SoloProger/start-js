import { Control, FieldValues } from "react-hook-form";

type ControlType = "radio" | "checkbox";

interface Color {
  colorName: unknown;
  colorNumber: number;
}

interface ControlValue {
  value: string;
  label: string;
  color: Color;
}

export interface FormControl {
  controlName: string;
  controlLabel: string;
  controlType: ControlType;
  controlLabelColor: string;
  controlValues: ControlValue[];
}

export interface FormConfig {
  commonControl: Control<FieldValues>;
  controls: FormControl[];
}

export interface CommonFormProps {
  config: FormConfig;
  submit: () => void;
}
