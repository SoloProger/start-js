import ExploreButton from "./explore-button/ExploreButton";
import GenerateButton from "./generate-button/GenerateButton";
import styles from "./Generate.module.css";

const Generate = () => {
  return (
    <div className={styles.generate}>
      <GenerateButton formParams={null} />
      <ExploreButton formParams={null} />
    </div>
  );
};

export default Generate;
