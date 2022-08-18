import { NameData } from "../Utils/interfaces";
import styles from "./InfoDisplay.module.scss";
function InfoDisplay(props: NameData) {
  const { ageData, genderData, countryData } = props;
  const { age, name, count: ageCount } = ageData;
  const {
    gender,
    probability: genderProbability,
    count: genderCount,
  } = genderData;
  const { name: countryNames, flags } = countryData;
  return (
    <section className={styles.InfoDisplay}>
      <h2>Age Information</h2>
      <p>
        <b>{name ? name : null}</b>
      </p>
      <p>
        Probable age: <span>{age ? age : null}</span>
      </p>
      <p>
        Datapoints used: <span>{ageCount ? ageCount : null}</span>
      </p>
      <h2>Gender Information</h2>
      <p>
        Probable gender: <span>{gender ? gender : null}</span>
      </p>
      <p>
        Probability: <span>{genderProbability ? genderProbability : null}</span>
      </p>
      <p>
        Data points used: <span>{genderCount ? genderCount : null}</span>
      </p>
      <h2>Nationality Information</h2>
      <p>
        Probable nationality:{" "}
        <span>{countryNames ? countryNames.common : null}</span>
      </p>
      <img src={flags ? flags.png : null} alt="flag of the person" />
    </section>
  );
}

export default InfoDisplay;
