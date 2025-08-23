import { FC } from "react";
import CheckboxControl from "../Controls/CheckboxControl/CheckboxControl";
import RadioButtonControl from "../Controls/RadioControl/RadioButtonControl";
import styles from "./CommonForm.module.css";
import { CommonFormProps, FormControl } from "./types";

const CommonForm: FC<CommonFormProps> = ({ config, submit }) => {
  const renderControlByType = (control: FormControl) => {
    switch (control.controlType) {
      case "radio":
        return (
          <RadioButtonControl
            key={control.controlName}
            control={config.commonControl}
            label={control.controlLabel}
            name={control.controlName}
            radioButtons={control.controlValues}
            labelColor={control.controlLabelColor}
          />
        );
      case "checkbox":
        return (
          <CheckboxControl
            key={control.controlName}
            control={config.commonControl}
            label={control.controlLabel}
            name={control.controlName}
            checkboxValues={control.controlValues}
            labelColor={control.controlLabelColor}
          />
        );
    }
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      {config.controls.map((control) => renderControlByType(control))}
    </form>
  );
};

export default CommonForm;
