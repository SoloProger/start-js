import { FormConfig } from "@/common/CommonForm/types";
import { lightBlue } from "@mui/material/colors";
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
      controlName: "uiKit",
      controlLabel: "Ui-Kit",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "none",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Без ui-kit",
        },
        {
          value: "mui",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Material UI",
        },
        {
          value: "chakra",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Chakra UI",
        },
        {
          value: "ant",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Ant Design",
        },
        {
          value: "shadcn",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Shadcn Ui",
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
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Без store",
        },
        {
          value: "redux",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Redux",
        },
        {
          value: "mobx",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "MobX",
        },
        {
          value: "zustund",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Zustund",
        },
      ],
    },
    {
      controlName: "fetches",
      controlLabel: "Запросы",
      controlType: "radio",
      controlLabelColor: `${styles.form_color}`,
      controlValues: [
        {
          value: "none",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Без store",
        },
        {
          value: "redux",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Redux",
        },
        {
          value: "mobx",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "MobX",
        },
        {
          value: "zustund",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Zustund",
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
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "ESlint",
        },
        {
          value: "prettier",
          color: {
            colorName: lightBlue,
            colorNumber: 600,
          },
          label: "Prettier",
        },
      ],
    },
  ],
});
