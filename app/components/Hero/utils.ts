import { hero } from "../../../public/components/data/index.json";

const initialArray: string[] = hero.roles

export const roles: (string | number)[] = initialArray.reduce(
  (acc: (string | number)[], curr: string) => [...acc, curr, 1500],
  []
);
