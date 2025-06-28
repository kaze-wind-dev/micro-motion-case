import styles from "./index.module.css";

type Props = {
  addClass?: string;
};

const Spinner = ({ addClass }: Props) => {
  return (
    <div
      className={
        addClass
          ? `${addClass} ${styles.spinner} ${styles.spinning} `
          : `${styles.spinner} ${styles.spinning}`
      }
    ></div>
  );
};

export default Spinner;
