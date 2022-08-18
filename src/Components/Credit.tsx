import styles from "./Credit.module.scss";
function Credit() {
  return (
    <section className={styles.Credit}>
      <p>
        Powered by{" "}
        <a href="https://restcountries.com/#rest-countries">Rest Countries</a>
        <a href="https://genderize.io/">Genderize.io</a>
        <a href="https://agify.io/">Agify.io</a>
        <a href="https://nationalize.io/">Nationalize.io</a>
      </p>
    </section>
  );
}

export default Credit;
