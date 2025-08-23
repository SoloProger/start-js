import { Control } from "react-hook-form";

interface Color {
  colorName: any;
  colorNumber: number;
}

interface RadioButton {
  value: string;
  label: string;
  color: Color;
}

export interface RadioButtonControlProps {
  control: Control<any>;
  label: string;
  name: string;
  labelColor: string;
  radioButtons: RadioButton[];
}
