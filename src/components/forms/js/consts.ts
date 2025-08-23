import { FormConfig } from "@/common/CommonForm/types";
import { yellow } from "@mui/material/colors";
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
            colorName: yellow,
            colorNumber: 500,
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
          value: "js",
          color: {
            colorName: yellow,
            colorNumber: 500,
          },
          label: "JavaScript",
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
            colorName: yellow,
            colorNumber: 500,
          },
          label: "ESlint",
        },
        {
          value: "prettier",
          color: {
            colorName: yellow,
            colorNumber: 500,
          },
          label: "Prettier",
        },
      ],
    },
  ],
});
