"use client";

import styles from "./GenerateButton.module.css";

interface GenerateButtonProps {
  formParams: unknown;
}

const GenerateButton = ({ formParams }: GenerateButtonProps) => {
  const onGenerate = () =>
    fetch("http://localhost:8080/download")
      .then((res) => res.blob()) // получаем бинарный blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "project.zip";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(console.error);

  return (
    <button className={styles.button} onClick={onGenerate}>
      Сгенерировать
    </button>
  );
};

export default GenerateButton;
