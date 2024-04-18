import data from "../../../public/components/data/index.json";

const { heroData } = data;
const initialArray: string[] = heroData.roles;

export const roles: (string | number)[] = initialArray.reduce(
  (acc: (string | number)[], curr: string) => [...acc, curr, 1500],
  []
);
