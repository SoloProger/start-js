import { FormConfig } from "@/common/CommonForm/types";
import { red } from "@mui/material/colors";
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
      controlName: "cli",
      controlLabel: "CLI",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "angularCli",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Angular CLI",
        },
        {
          value: "nx",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Nx",
        },
      ],
    },
    {
      controlName: "collector",
      controlLabel: "Сборщик",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "vite",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Vite",
        },
        {
          value: "esbuild",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "ESbuild",
        },
        {
          value: "webpack",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Webpack",
        },
      ],
    },
    {
      controlName: "modules",
      controlLabel: "Модули или компоненты (standalone)",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "standalone",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Standalone-компоненты",
        },
        {
          value: "modules",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Модули",
        },
      ],
    },
    {
      controlName: "uiKit",
      controlLabel: "Ui-Kit",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "none",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Без ui-kit",
        },
        {
          value: "material",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Angular Material",
        },
        {
          value: "primeng",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "PrimeNG",
        },
        {
          value: "ngZorro",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "NgZorro",
        },
        {
          value: "taigaui",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Taiga Ui",
        },
      ],
    },
    {
      controlName: "store",
      controlLabel: "Глобальное хранилище (Store)",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "none",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Без store",
        },
        {
          value: "ngrx",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "NgRx",
        },
        {
          value: "ngxs",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "NgXS",
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
            colorName: red,
            colorNumber: 600,
          },
          label: "ESlint",
        },
        {
          value: "prettier",
          color: {
            colorName: red,
            colorNumber: 600,
          },
          label: "Prettier",
        },
      ],
    },
  ],
});
