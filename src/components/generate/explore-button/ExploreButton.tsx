"use client";

import styles from "./ExploreButton.module.css";

interface ExploreButtonProps {
  formParams: unknown;
}

const ExploreButton = ({ formParams }: ExploreButtonProps) => {
  const onGenerate = () => console.log(formParams);

  return (
    <button className={styles.button} onClick={onGenerate}>
      Сгенерировать
    </button>
  );
};

export default ExploreButton;
