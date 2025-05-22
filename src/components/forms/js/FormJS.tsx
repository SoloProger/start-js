"use client";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { common, yellow } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import styles from "./FormJS.module.css";

interface FormJS {
  collector: string;
  language: string;
  withEslint: boolean;
  withPrettier: boolean;
}

const FormJS = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      language: {},
      collector: {},
      extra: {
        withEslint: false,
        withPrettier: false,
      },
    },
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="collector"
        control={control}
        render={({ field }) => (
          <FormControl {...field}>
            <FormLabel id="collector-group" className={styles.form_color}>
              Сборщик
            </FormLabel>
            <RadioGroup
              aria-labelledby="collector-group"
              defaultValue="vite"
              name="collector-group"
              row
            >
              <FormControlLabel
                value="vite"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                  />
                }
                label="Vite"
              />
              <FormControlLabel
                value="webpack"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                  />
                }
                label="webpack"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Controller
        name="language"
        control={control}
        render={({ field }) => (
          <FormControl {...field}>
            <FormLabel id="language-group" className={styles.form_color}>
              Язык программирования
            </FormLabel>
            <RadioGroup
              aria-labelledby="language-group"
              defaultValue="js"
              name="language-group"
              row
            >
              <FormControlLabel
                value="js"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: yellow[600],
                      },
                    }}
                  />
                }
                label="JavaScript"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Controller
        name="extra"
        control={control}
        render={({ field }) => (
          <FormGroup {...field}>
            <FormLabel id="language-group" className={styles.form_color}>
              Дополнительно
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: yellow[600],
                    },
                  }}
                />
              }
              label="ESLint"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: yellow[600],
                    },
                  }}
                />
              }
              label="Prettier"
            />
          </FormGroup>
        )}
      />
    </form>
  );
};

export default FormJS;
