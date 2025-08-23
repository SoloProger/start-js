import { FormConfig } from "@/common/CommonForm/types";
import { blue } from "@mui/material/colors";
import { Control, FieldValues } from "react-hook-form";

export const formConfig = (
  control: Control<FieldValues>,
  styles: {
    readonly [key: string]: string;
  }
): FormConfig => ({
  commonControl: control,
  controls: [
    {
      controlName: "collector",
      controlLabel: "Сборщик",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "vite",
          color: {
            colorName: blue,
            colorNumber: 600,
          },
          label: "Vite",
        },
      ],
    },
    {
      controlName: "language",
      controlLabel: "Язык программирования",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "ts",
          color: {
            colorName: blue,
            colorNumber: 600,
          },
          label: "TypeScript",
        },
      ],
    },
    {
      controlName: "extra",
      controlLabel: "Дополнительно",
      controlType: "checkbox",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "eslint",
          color: {
            colorName: blue,
            colorNumber: 600,
          },
          label: "ESlint",
        },
        {
          value: "prettier",
          color: {
            colorName: blue,
            colorNumber: 600,
          },
          label: "Prettier",
        },
      ],
    },
  ],
});
