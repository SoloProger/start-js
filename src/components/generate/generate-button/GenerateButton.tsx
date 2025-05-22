"use client";

import styles from "./GenerateButton.module.css";

interface GenerateButtonProps {
  formParams: unknown;
}

const GenerateButton = ({ formParams }: GenerateButtonProps) => {
  const onGenerate = () => console.log(formParams);

  return (
    <button className={styles.button} onClick={onGenerate}>
      Сгенерировать
    </button>
  );
};

export default GenerateButton;
