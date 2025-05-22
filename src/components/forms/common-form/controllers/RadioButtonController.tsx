import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface RadioButton {
  value: string;
  label: string;
}

interface RadioButtonControllerProps {
  control: Control<any>;
  label: string;
  labelColor: string;
  radioColor: string;
  radioButtons: RadioButton[];
  defaultRadio: string;
}

const RadioButtonController: FC<RadioButtonControllerProps> = ({
  control,
  label,
  labelColor,
  radioColor,
  radioButtons,
  defaultRadio,
}) => {
  return (
    <Controller
      name="collector"
      control={control}
      render={({ field }) => (
        <FormControl {...field}>
          <FormLabel id="collector-group" className={labelColor}>
            {label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="collector-group"
            defaultValue={defaultRadio}
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
                        color: radioColor,
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

export default RadioButtonController;
