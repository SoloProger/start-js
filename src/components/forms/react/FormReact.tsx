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
import { common, lightBlue } from "@mui/material/colors";
import { Controller, useForm } from "react-hook-form";
import styles from "./FormReact.module.css";

interface FormReact {
  collector: string;
  language: string;
  withEslint: boolean;
  withPrettier: boolean;
}

const FormReact = () => {
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
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Без ui-kit"
              />

              <FormControlLabel
                value="material"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Angular Material"
              />

              <FormControlLabel
                value="mui"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Material UI"
              />

              <FormControlLabel
                value="chakra"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Chakra UI"
              />

              <FormControlLabel
                value="ant"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Ant Design"
              />

              <FormControlLabel
                value="shadcn"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Shadcn UI"
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
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Без store"
              />

              <FormControlLabel
                value="redux"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Redux"
              />

              <FormControlLabel
                value="mobx"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="MobX"
              />

              <FormControlLabel
                value="zustund"
                control={
                  <Radio
                    sx={{
                      color: common.white,
                      "&.Mui-checked": {
                        color: lightBlue[600],
                      },
                    }}
                  />
                }
                label="Zustund"
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
                        color: lightBlue[600],
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
                        color: lightBlue[600],
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
                        color: lightBlue[600],
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
                      color: lightBlue[600],
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
                      color: lightBlue[600],
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
                      color: lightBlue[600],
                    },
                  }}
                />
              }
              label="React Router"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: lightBlue[600],
                    },
                  }}
                />
              }
              label="React Hook Form"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: lightBlue[600],
                    },
                  }}
                />
              }
              label="React Quary"
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: common.white,
                    "&.Mui-checked": {
                      color: lightBlue[600],
                    },
                  }}
                />
              }
              label="SWR"
            />
          </FormGroup>
        )}
      />
    </form>
  );
};

export default FormReact;
