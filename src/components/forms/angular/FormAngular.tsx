"use client";

import { CommonForm } from "@/common/CommonForm";
import { FieldValues, useForm } from "react-hook-form";
import { formConfig } from "./consts";
import styles from "./FormAngular.module.css";

interface FormAngular {
  collector: string;
  language: string;
  withEslint: boolean;
  withPrettier: boolean;
}

const FormAngular = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cli: {},
      collector: {},
      extra: {
        withEslint: false,
        withPrettier: false,
      },
    },
  } as FieldValues);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <CommonForm
      config={formConfig(control, styles)}
      submit={handleSubmit(onSubmit)}
    ></CommonForm>
  );
};

export default FormAngular;
