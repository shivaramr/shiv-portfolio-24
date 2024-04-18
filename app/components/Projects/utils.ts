import data from "../../../public/components/data/index.json";

export interface Project {
  imgPath: string;
  code: string;
  demo: string;
  video: string;
  aosDelay?: number;
}

const { projectsData } = data;
export const projects = projectsData.map((obj, index) => {
  const aosDelay = index * 200 + 100;
  return { ...obj, aosDelay };
});
