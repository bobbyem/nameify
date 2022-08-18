export interface AgeData {
  name: string;
  age: number;
  count: number;
}
export interface GenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}
export interface NatioData {
  name: string;
  country: [Country];
}
export interface Country {
  country_id: string;
  probability: number;
}
export interface CountryData {
  name: { common: any; official: any };
  flags: { png: any; svg: any };
}

export interface NameData {
  ageData: AgeData;
  genderData: GenderData;
  natioData: NatioData;
  country?: Country;
  countryData: CountryData;
}
