import { useEffect, useState } from "react";
import {
  CountryData,
  GenderData,
  AgeData,
  NatioData,
} from "../Utils/interfaces";
import InfoDisplay from "./InfoDisplay";
import styles from "./NameCalculator.module.scss";

function NameCalculator() {
  const url_AGE: string = "https://api.agify.io?name=";
  const url_GENDER: string = "https://api.genderize.io?name=";
  const url_NATIO: string = "https://api.nationalize.io?name=";
  const url_FLAG: string = "https://restcountries.com/v3.1/alpha/";

  const [ageData, setAgeData] = useState<AgeData | null>(null);
  const [genderData, setGenderData] = useState<GenderData | null>(null);
  const [natioData, setNatioData] = useState<NatioData | null>(null);
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [query, setQuery] = useState<string>("");
  const [noMatch, setNoMatch] = useState<boolean>(false);

  function toggleNoMatch(newState: boolean): void {
    setAgeData(null);
    setGenderData(null);
    setNatioData(null);
    setCountryData(null);
    setNoMatch(newState);
  }

  function getData(name: string): void {
    try {
      fetch(url_AGE.concat(name))
        .then((resp) => resp.json())
        .then((data) => setAgeData(data));
    } catch (error) {}
    try {
      fetch(url_GENDER.concat(name))
        .then((resp) => resp.json())
        .then((data) => setGenderData(data));
    } catch (error) {}
    try {
      fetch(url_NATIO.concat(name))
        .then((resp) => resp.json())
        .then((data) => {
          if (data.country.length < 3) {
            return toggleNoMatch(true);
          }
          setNatioData(data);
          setNoMatch(false);
        });
    } catch (error) {}
  }

  function getCountryInfo(cCode: string): void {
    try {
      fetch(url_FLAG.concat(cCode))
        .then((resp) => resp.json())
        .then((data) => {
          if (data[0]) {
            const country: CountryData = {
              name: data[0].name,
              flags: data[0].flags,
            };
            setCountryData(country);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyDwn(event: any): void {
    if (event.key === "Enter") {
      getData(query);
    }
  }

  useEffect(() => {
    if (natioData) {
      let countryCode: string = natioData.country[0].country_id;
      getCountryInfo(countryCode);
    }
  }, [natioData]);

  return (
    <section className={styles.NameCalculator}>
      <h1 className={styles.Title}>Nameify</h1>
      <input
        onChange={(event) => {
          setQuery(event.target.value);
          setNoMatch(false);
        }}
        placeholder="Name here"
        onKeyDown={handleKeyDwn}
      />
      <button
        onClick={() => {
          getData(query);
        }}
      >
        Get Name Information
      </button>
      {noMatch ? <h1>No match for "{query}"</h1> : null}
      {ageData && genderData && natioData && countryData ? (
        <InfoDisplay
          ageData={ageData}
          genderData={genderData}
          natioData={natioData}
          countryData={countryData}
        />
      ) : null}
    </section>
  );
}

export default NameCalculator;
