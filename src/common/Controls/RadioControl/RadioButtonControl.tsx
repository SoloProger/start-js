import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { RadioButtonControlProps } from "./types";

const RadioButtonControl: FC<RadioButtonControlProps> = ({
  control,
  label,
  name,
  labelColor,
  radioButtons,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl {...field}>
          <FormLabel id="collector-group" className={labelColor}>
            {label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="collector-group"
            defaultValue={radioButtons[0].value}
            name="collector-group"
            row
          >
            {radioButtons.map((radioButton, idx) => (
              <FormControlLabel
                key={idx}
                value={radioButton.value}
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color:
                          radioButton.color.colorName[
                            radioButton.color.colorNumber
                          ],
                      },
                    }}
                  />
                }
                label={radioButton.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default RadioButtonControl;
