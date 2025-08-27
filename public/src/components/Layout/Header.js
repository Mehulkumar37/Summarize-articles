import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <h1>Synop</h1>
      </a>
      <a href="https://github.com/Mehulkumar37/Summarize-articles">
        <p>GitHub</p>
      </a>
    </header>
  );
};

export default Header;
