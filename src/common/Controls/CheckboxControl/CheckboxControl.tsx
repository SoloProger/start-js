import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { CheckboxControlProps } from "./types";

const CheckboxControl: FC<CheckboxControlProps> = ({
  control,
  label,
  name,
  labelColor,
  checkboxValues,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormGroup {...field}>
          <FormLabel id="language-group" className={labelColor}>
            {label}
          </FormLabel>
          {checkboxValues.map((checkbox, idx) => (
            <FormControlLabel
              key={idx}
              control={
                <Checkbox
                  value={checkbox.value}
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color:
                        checkbox.color.colorName[checkbox.color.colorNumber],
                    },
                  }}
                />
              }
              label={checkbox.label}
            />
          ))}
        </FormGroup>
      )}
    />
  );
};

export default CheckboxControl;
