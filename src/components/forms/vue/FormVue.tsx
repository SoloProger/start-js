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
import { common, green } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import styles from "./FormVue.module.css";

interface FormVue {
  collector: string;
  language: string;
  withEslint: boolean;
  withPrettier: boolean;
}

const FormVue = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cli: {},
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
              Ui-kit
            </FormLabel>
            <RadioGroup
              aria-labelledby="collector-group"
              defaultValue="none"
              name="collector-group"
              row
            >
              <FormControlLabel
                value="none"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Без ui-kit"
              />

              <FormControlLabel
                value="vuetify"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Vuetify"
              />

              <FormControlLabel
                value="quasar"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Quasar"
              />

              <FormControlLabel
                value="element"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Element UI"
              />

              <FormControlLabel
                value="ant"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Ant Design"
              />

              <FormControlLabel
                value="primevue"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Prime Vue"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Controller
        name="collector"
        control={control}
        render={({ field }) => (
          <FormControl {...field}>
            <FormLabel id="collector-group" className={styles.form_color}>
              Store
            </FormLabel>
            <RadioGroup
              aria-labelledby="collector-group"
              defaultValue="none"
              name="collector-group"
              row
            >
              <FormControlLabel
                value="none"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Без store"
              />

              <FormControlLabel
                value="vuex"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Vuex"
              />

              <FormControlLabel
                value="pinia"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Pinia"
              />
            </RadioGroup>
          </FormControl>
        )}
      />

      <Controller
        name="collector"
        control={control}
        render={({ field }) => (
          <FormControl {...field}>
            <FormLabel id="collector-group" className={styles.form_color}>
              Запросы
            </FormLabel>
            <RadioGroup
              aria-labelledby="collector-group"
              defaultValue="fetch"
              name="collector-group"
              row
            >
              <FormControlLabel
                value="fetch"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Fetch"
              />

              <FormControlLabel
                value="axios"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Axios"
              />

              <FormControlLabel
                value="ky"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Ky"
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
                      color: green[400],
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
                      color: green[400],
                    },
                  }}
                />
              }
              label="Prettier"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: green[400],
                    },
                  }}
                />
              }
              label="Vue Router"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: green[400],
                    },
                  }}
                />
              }
              label="VeeValidate"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: green[400],
                    },
                  }}
                />
              }
              label="Vue Query"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: green[400],
                    },
                  }}
                />
              }
              label="Vue Form"
            />
          </FormGroup>
        )}
      />
    </form>
  );
};

export default FormVue;
