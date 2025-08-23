import { Control } from "react-hook-form";

interface Color {
  colorName: any;
  colorNumber: number;
}

interface Checkbox {
  value: string;
  label: string;
  color: Color;
}

export interface CheckboxControlProps {
  control: Control<any>;
  label: string;
  name: string;
  labelColor: string;
  checkboxValues: Checkbox[];
}
